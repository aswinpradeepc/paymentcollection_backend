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
RUN npm install --save-dev nodemon ts-node @types/node @types/express @types/swagger-jsdoc @types/swagger-ui-express

# Copy the rest of the application
COPY . .

# Build TypeScript files
RUN npm run build
# Build TypeScript files
RUN tsc

# Expose the application port
EXPOSE 3000

# Start the server with node for production
# CMD ["node", "dist/server.js"]

# Start the application with nodemon for development
CMD ["npx", "nodemon", "--watch", "src", "--exec", "ts-node", "src/server.ts"]