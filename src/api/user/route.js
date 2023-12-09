import express from "express";

// controller
import userController from "../../adapters/controllers/userController.js";

// controller dependencies
import authServiceImpl from "../../frameworks/services/authService.js";
import authServiceInterface from "../../application/services/authService.js";
import userDbRepository from "../../application/repositories/userDbRepository.js";
import userDbRepositoryMongoDB from "../../frameworks/databases/mongodb/repositories/userRepositoryMongoDB.js";

const router = express.Router();

const controller = userController(
  userDbRepository,
  userDbRepositoryMongoDB,
  authServiceInterface,
  authServiceImpl
);

// Find user using url queries
router.get("/", controller.findUserByProperty);

// Add a new user
router.post("/", controller.addNewUser);

// Find user using their id
router.get("/:id", controller.findUserById);

export default router;
