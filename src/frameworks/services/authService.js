import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../../../config/config.js";

const authService = () => {
  const encryptPassword = (password) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(password, salt);
    } catch (error) {
      throw new Error(`Error encrypting password: ${error.message}`);
    }
  };

  const compare = (password, hashedPassword) => {
    try {
      return bcrypt.compareSync(password, hashedPassword);
    } catch (error) {
      throw new Error(`Error comparing passwords: ${error.message}`);
    }
  };

  const verifyToken = (token) => {
    try {
      return jwt.verify(token, config.jwtSecret);
    } catch (error) {
      throw new Error(`Error verifying token: ${error.message}`);
    }
  };

  const generateToken = (payload) => {
    try {
      const data = {
        time: Date(),
        payload,
      };
      const token = jwt.sign(data, config.jwtSecret, {
        expiresIn: 56000,
      });

      return token;
    } catch (error) {
      throw new Error(`Error generating token: ${error.message}`);
    }
  };

  return { encryptPassword, compare, verifyToken, generateToken };
};

export default authService;
