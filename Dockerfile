# Use Node.js as the base image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY server.js .
COPY index.html .
COPY package*.json ./
 

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]