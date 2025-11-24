   
# Step 1: Use an official Node.js image
FROM node:18-alpine

# Step 2: Set working directory inside container
WORKDIR /app

# Step 3: Copy package.json first
COPY package.json .

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy rest of the application
COPY . .

# Step 6: Expose port
EXPOSE 3000

# Step 7: Start the app
CMD ["npm", "start"]
                        
