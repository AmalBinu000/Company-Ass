const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
