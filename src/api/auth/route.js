import express from "express";

// validation
import { signInValidator } from "../../entities/users/users.validator.js";

// controller
import authController from "../../adapters/controllers/authController.js";

// controller dependencies
import authServiceInterface from "../../application/services/authService.js";
import authServiceImpl from "../../frameworks/services/authService.js";
import userDbRepository from "../../application/repositories/userDbRepository.js";
import userDbRepositoryMongoDB from "../../frameworks/databases/mongodb/repositories/userRepositoryMongoDB.js";

const router = express.Router();

const controller = authController(
  userDbRepository,
  userDbRepositoryMongoDB,
  authServiceInterface,
  authServiceImpl
);

// Sign in route
router.get("/", signInValidator, controller.loginUser);

export default router;
