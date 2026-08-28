from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/")
def home():
    return "Flask backend is running"


@app.route("/submit", methods=["POST"])
def submit():

    data = request.get_json()

    name = data["name"]
    description = data["description"]

    print("Received data:", name, description)

    return jsonify({
        "message": "Data received successfully",
        "name": name,
        "description": description
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
