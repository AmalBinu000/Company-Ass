import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    status: 'pending',
  });

  useEffect(() => {
    fetch('http://localhost:1017/todo/data')
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  // Handle adding new todo
  const handleAddTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:1017/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      });

      const data = await response.json();
      if (response.ok) {
        // Add the new todo to the state
        setTodo([...todo, data]);
        setNewTodo({ title: '', description: '', status: 'pending' }); // Clear the form
      } else {
        console.error('Error adding todo:', data);
      }
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  // Handle deleting a todo
  const handleDeleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:1017/todo/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (response.ok) {
        // Remove the deleted todo from the list
        setTodo(todo.filter(task => task._id !== id));
      } else {
        console.error('Error deleting todo:', data);
      }
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <div className=" p-4" >
      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} className="mb-4">
        <input
          type="text"
          name="title"
          value={newTodo.title}
          onChange={handleInputChange}
          placeholder="Todo Title"
          required
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          name="description"
          value={newTodo.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
          className="p-2 border rounded mr-2"
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Add Todo
        </button>
      </form>

      {/* Display Todos */}
      
      {todo.map((task) => (
        <div key={task._id} className="border p-4 mb-4 rounded shadow">
          <h1 className="text-xl font-bold">{task.title}</h1>
          <p>{task.description}</p>
          <p className="italic text-sm text-gray-600">{task.status}</p>
          <button
            onClick={() => handleDeleteTodo(task._id)}
            className="bg-red-600 text-white p-2 rounded mt-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ..."
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
