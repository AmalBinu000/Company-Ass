const express = require("express");
const router = express.Router();
const { createTodo, getTodos, deleteTodo } = require("../controllers/todo.controller");

router.post("/", createTodo);   // Route to create a new todo
router.get("/data", getTodos);  // Route to get all todos
router.delete("/:id", deleteTodo); // Route to delete a todo by ID

module.exports = router;
