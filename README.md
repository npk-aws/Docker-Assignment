# Docker Flask and Node.js Application

This project contains a simple frontend and backend application.

## Technologies

- Node.js
- Express
- Flask
- Docker
- Docker Compose

## Project Structure

frontend/
- server.js
- package.json
- public/index.html
- Dockerfile

backend/
- app.py
- requirements.txt
- Dockerfile

docker-compose.yml

## How it works

The Node.js Express application runs on port 3000.

The Flask application runs on port 5000.

The frontend sends the form data to the Flask backend.

Docker Compose creates a network between the frontend and backend containers.

The frontend communicates with the backend using:

http://backend:5000

## Run the application

Run:

docker compose up --build

Then open:

http://localhost:3000

## Stop the application

docker compose down
