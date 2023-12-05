import express from "express";
import { validationResult } from "express-validator";
import { signInValidator } from "../../entities/users/users.validator.js";
import authServiceImpl from "../../frameworks/services/authService.js";
import authServiceInterface from "../../application/services/authService.js";

const router = express.Router();
const authService = authServiceInterface(authServiceImpl());

router.get("/", signInValidator, (req, res) => {
  const errors = validationResult(req);

  if (errors.errors.length > 0) {
    console.log(errors);
    return res.send("Bad Info");
  }

  // sign in user logic
  const token = authService.generateToken(12123);

  res.send({ token });
});

export default router;
