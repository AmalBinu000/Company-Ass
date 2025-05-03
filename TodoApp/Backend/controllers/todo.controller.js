const Todo = require("../models/todo.model");

exports.createTodo = async (req, res) => {
  try {
    const data = new Todo(req.body);
    await data.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).send({ error: "Todo not found" });
    }
    res.status(200).send({ message: "Todo deleted successfully", todo });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
