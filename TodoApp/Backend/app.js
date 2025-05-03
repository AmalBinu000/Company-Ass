const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const appRoute = require("./routes/todo.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo", appRoute);

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://amalbinu000:BinuMathew@cluster0.shdbjpi.mongodb.net/";  // Use .env for sensitive data
mongoose.connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Start the server
app.listen(1017, () => {
  console.log("Server running on http://localhost:1017");
});
