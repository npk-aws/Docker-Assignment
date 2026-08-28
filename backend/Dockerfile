# Use Python image
FROM python:3.12-slim

# Application directory
WORKDIR /app

# Copy requirements
COPY requirements.txt .

# Install Flask
RUN pip install -r requirements.txt

# Copy application
COPY app.py .

# Flask port
EXPOSE 5000

# Start application
CMD ["python", "app.py"]
