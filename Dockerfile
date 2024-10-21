# Stage 1: Build the Angular app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire app and build it
COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with nginx
FROM nginx:alpine

# Copy the build output to the nginx folder
COPY --from=build /app/dist/angular-devexpress__project-management /usr/share/nginx/html

# Expose the default port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]