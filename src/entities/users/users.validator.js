import { body } from "express-validator";

export const registerValidator = [
  body("username", "Cannot be empty").isString().notEmpty(),
  body("password", "Cannot be empty").isString().notEmpty(),
];

export const signInValidator = [
  body("username", "Cannot be empty").isString().notEmpty(),
  body("password", "Cannot be empty").isString().notEmpty(),
];
