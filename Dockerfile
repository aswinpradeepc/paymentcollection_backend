# Dockerfile for Node.js + TypeScript + PostgreSQL
FROM node:23-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Install TypeScript globally
RUN npm install -g typescript

# Install dependencies including type definitions
RUN npm install --save-dev @types/node @types/express @types/jsonwebtoken @types/swagger-jsdoc @types/swagger-ui-express

# Copy the rest of the application
COPY . .

# Build TypeScript files
RUN npm run build

# Expose the application port
EXPOSE 5000

# Start the server
CMD ["node", "dist/server.js"]