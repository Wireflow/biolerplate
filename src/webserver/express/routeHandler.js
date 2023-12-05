import express from "express";
import fs from "fs";
import path from "path";
import __dirname from "../../infrastructure/utils/directoryUtils.js";

const router = express.Router();
const apiDirectory = path.join(__dirname, "/api");

// Define a generic route handler
const handleRoute = async (routeFolder, routePath) => {
  const fileURL = new URL(`file://${path.resolve(routePath)}`);

  try {
    const module = await import(fileURL);
    const route = module.default;
    const routeURL = `/api/${routeFolder}`;
    router.use(routeURL, route);
    console.log(`${routeURL} route created.`);
  } catch (err) {
    console.error(`Error setting up route for ${routeFolder}: ${err}`);
  }
};

// Dynamically set up routes based on the API folder
const setRoutes = async () => {
  const routeFolders = fs.readdirSync(apiDirectory, { withFileTypes: true });

  for (const routeName of routeFolders) {
    if (routeName.isDirectory()) {
      const routeFolder = routeName.name;
      const routePath = path.join(apiDirectory, routeFolder, "route.js");
      const routeStats = fs.statSync(routePath);

      if (routeStats.isFile() && routePath.endsWith(".js")) {
        await handleRoute(routeFolder, routePath);
      }
    }
  }
};

// Invoke the route setup
await setRoutes();

export default router;
