# Use the base image
FROM bayesimpact/react-base:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for the React app
EXPOSE 3000

# Run the React app
CMD ["npm", "start"]
