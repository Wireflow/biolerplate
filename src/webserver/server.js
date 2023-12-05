import express from "express";
import path from "path";
import terminalLink from "terminal-link";
import __dirname from "../infrastructure/utils/directoryUtils.js";

const buildDirectory = path.join(__dirname, "./client/dist");

const serverConfig = (app, server, config) => {
  const production = () => {
    // Serve the built React app
    app.use(express.static(buildDirectory));

    // Handle React Router routes
    app.get(/^(?!\/api).*/, (req, res) => {
      res.sendFile(path.join(buildDirectory, "index.html"));
    });
  };

  // The start method is ran in the main file of the server to the run the server
  const start = () => {
    const serverLink = terminalLink(
      `http://${config.ip}:${config.port}`,
      "local"
    );

    server.on("error", (error) => {
      console.error("Server startup error:", error);
    });

    server.listen(config.port, () => {
      console.log(`App running on ${serverLink}`);
    });
  };

  return { start, production };
};

export default serverConfig;
