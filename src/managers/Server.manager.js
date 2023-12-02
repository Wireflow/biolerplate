import cors from "cors";
import express from "express";
import http from "http";
import terminalLink from "terminal-link";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import routerHandler from "../adapters/frameworks/express/routeHandler.js";
import __dirname from "@utils/directoryUtils.js";

const app = express();

export const ServerManager = () => {
  const setMiddlewares = () => {
    app.use(
      cors({
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        optionsSuccessStatus: 204,
      })
    );
    app.use(helmet());
    app.use(express.json());
    app.use(cookieParser());
    dotenv.config();
  };

  const handleBadRoutes = () => {
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: "Internal Server Error" });
    });

    // Route not found middleware
    app.use((req, res, next) => {
      res
        .status(404)
        .json({ error: "Route not found. Please check api folder" });
    });
  };

  const setBuildRoutes = async () => {
    // Serve the built React app
    app.use(express.static(buildDirectory));

    // Handle React Router routes
    app.get(/^(?!\/api).*/, (req, res) => {
      res.sendFile(path.join(buildDirectory, "index.html"));
    });
  };

  // The start method is ran in the main file of the server to the run the server
  const start = async (port) => {
    setMiddlewares();
    app.use(routerHandler);
    // await setBuildRoutes();
    handleBadRoutes();
    const server = http.createServer(app);
    const host = "localhost";
    const serverLink = terminalLink(`http://${host}:${port}`, "local");

    server.on("error", (error) => {
      console.error("Server startup error:", error);
    });

    server.listen(port, host, () => {
      console.log(`App running on ${serverLink}`);
    });
  };

  // For external use for things such as middlewares
  const use = (args) => {
    app.use(args);
  };

  return { start, use };
};
