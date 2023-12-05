import authServiceImpl from "../../frameworks/services/authService";
import authServiceInterface from "../../application/services/authService";

export default authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const authService = authServiceInterface(authServiceImpl());

    const decoded = authService.verifyToken(token);

    if (!decoded) return res.status(401).json({ error: "Unauthorized" });

    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Error authenticating user or bad token!");
    res.status(500).json({ error: "Internal Server Error Finding User" });
  }
};
