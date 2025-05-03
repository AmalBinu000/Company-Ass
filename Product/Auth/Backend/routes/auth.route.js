import express from "express";
import { signup, login } from "../controllers/auth.controller.js"; // Import the controller
import  verifyToken  from "../middlewares/authMiddleware.js"; // Import the token verification middleware

const router = express.Router();

// POST /api/signup
router.post("/signup", signup);

// POST /api/login
router.post("/login", login);

// Protected route, only accessible if user has a valid JWT token
router.get("/home", verifyToken, (req, res) => {
  // Example data to return to the frontend
  res.json(["This is a protected resource", "More data...", "Test data"]);
});

export default router;
