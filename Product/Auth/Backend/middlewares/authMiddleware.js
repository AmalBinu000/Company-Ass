import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  // Get token from the Authorization header
  const token = req.header("Authorization");

  if (!token) {
    return res.status(403).json({ message: "Access denied. No token provided." });
  }

  try {
    // Remove "Bearer " part from the token and verify it
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decoded;
    next(); // Proceed to the next middleware/route handler
  } catch (err) {
    res.status(400).json({ message: "Invalid token." });
  }
};

export default verifyToken;
