# Stage 1: Build the React application
//change the node version to the latest version 
FROM node:17.0.2 as build
WORKDIR /app
COPY ./client/package*.json ./
RUN npm install
COPY ./client/ ./
RUN npm run build

# Stage 2: Serve the React application with the Express server
FROM node:17.0.2
WORKDIR /app
COPY ./server/package*.json ./
RUN npm install
COPY ./server/ ./
COPY --from=build /app/build ./public
EXPOSE 5001
CMD ["npm", "start"]