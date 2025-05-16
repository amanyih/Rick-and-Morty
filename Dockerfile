# Use an official lightweight Node.js image
FROM node:22-alpine3.21

# Set the working directory
WORKDIR /app

# Copy only the necessary files first for caching
COPY package.json package-lock.json ./

# Install pnpm globally
# RUN npm install -g pnpm

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the app's port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
