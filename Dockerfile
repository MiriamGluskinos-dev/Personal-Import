# Use the custom base image you already pulled
FROM bayesimpact/react-base:latest

# Set the working directory inside the container
WORKDIR /app

# Update the CA certificates to ensure SSL verification works
RUN apt-get update && apt-get install -y ca-certificates && update-ca-certificates

# Copy package.json and package-lock.json (if it exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for the React app
EXPOSE 3000

# Run the React app
CMD ["npm", "start"]