# Use Node.js image
FROM node:22-alpine

# Application directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Frontend port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
