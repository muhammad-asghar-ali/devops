FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json first to leverage Docker cache
COPY package.json /app

# Install the npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . /app

# Expose the application port
EXPOSE 8100

# Run the application
CMD ["node", "index.js"]
