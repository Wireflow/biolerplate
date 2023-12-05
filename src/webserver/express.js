import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import router from "./express/routeHandler.js";
import config from "../../config/config.js";

const expressConfig = (app) => {
  app.use(helmet());
  app.use(compression());
  app.use(
    cors({
      origin: config.ip,
      methods: "GET,PUT,POST,DELETE",
      optionsSuccessStatus: 204,
    })
  );
  app.use(
    express.json({
      limit: "50mb",
    })
  );

  app.use(
    express.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 50000,
    })
  );
  app.use(cookieParser());
  app.use(router);

  app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-type, Authorization"
    );

    next();
  });
};

export default expressConfig;
