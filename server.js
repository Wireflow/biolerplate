import { ServerManager } from "./src/managers/Server.manager.js";
import { MongoDB } from "./src/managers/Mongo.manager.js";

const server = ServerManager();
const database = MongoDB();

database.connect();
server.start(process.env.PORT || 3000);
