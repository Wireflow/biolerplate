import express from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import http from "http";

// web server configuration
import expressConfig from "./src/webserver/express.js";
import serverConfig from "./src/webserver/server.js";
import mongoDbConnection from "./src/frameworks/databases/mongodb/connection.js";

// middlewares
import errorHandlingMiddleware from "./src/webserver/middlewares/errorHandlingMiddleware.js";

const app = express();
const server = http.createServer(app);

// Initalize express
expressConfig(app);

// Initialize server
serverConfig(app, server, config).start();

// Initialize database connection
mongoDbConnection(mongoose, config, {
  autoIndex: false,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 10000,
  keepAlive: 120,
  connectTimeoutMS: 1000,
}).connectToMongo();

app.use(errorHandlingMiddleware);
// Expose
export default app;
