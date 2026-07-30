# Base Image
FROM node:22

# Create working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose application port
EXPOSE 2000

# Start application
CMD ["node", "app.js"]