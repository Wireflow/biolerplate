import express from "express";
const router = express.Router();
import { validationResult } from "express-validator";
import { registerValidator } from "../../entities/users/users.validator.js";
import authServiceImpl from "../../frameworks/services/authService.js";
import authServiceInterface from "../../application/services/authService.js";

const authService = authServiceInterface(authServiceImpl());

router.post("/", registerValidator, (req, res) => {
  const errors = validationResult(req);
  if (errors.errors.length > 0) {
    console.log(errors);
    return res.send("Bad Input");
  }

  // create user logic here

  const token = authService.generateToken(31241);

  res.status(200).json({ token });
});

export default router;
