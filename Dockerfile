# Stage 1: Build the React application
FROM node:16.13.0 as build
WORKDIR /app
COPY ./client/package*.json ./
RUN npm install
COPY ./client/ ./
RUN npm run build

# Stage 2: Serve the React application with the Express server
FROM node:16.13.0
WORKDIR /app
COPY ./server/package*.json ./
RUN npm install
COPY ./server/ ./
COPY --from=build /app/build ./public
EXPOSE 5001
CMD ["npm", "start"]