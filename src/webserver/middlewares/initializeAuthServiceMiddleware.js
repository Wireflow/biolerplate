import authServiceImpl from "../../frameworks/services/authService.js";
import authServiceInterface from "../../application/services/authService.js";

const initializeAuthServiceMiddleware = (req, res, next) => {
  req.authService = authServiceInterface(authServiceImpl());
  next();
};

export default initializeAuthServiceMiddleware;
