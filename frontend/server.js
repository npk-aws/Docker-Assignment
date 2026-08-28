const express = require("express");

const app = express();

const PORT = 3000;
const BACKEND_URL = process.env.BACKEND_URL || "http://backend:5000";

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.post("/submit", async (req, res) => {

    const data = {
        name: req.body.name,
        description: req.body.description
    };

    try {

        const response = await fetch(BACKEND_URL + "/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        res.send(`
            <h2>${result.message}</h2>
            <p>Name: ${result.name}</p>
            <p>Description: ${result.description}</p>
            <a href="/">Go Back</a>
        `);

    } catch (error) {

        res.send(`
            <h2>Error connecting to backend</h2>
            <p>${error.message}</p>
            <a href="/">Go Back</a>
        `);
    }
});

app.listen(PORT, () => {
    console.log("Frontend running on port " + PORT);
});
