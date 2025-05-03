import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([]) // initialize as array

  useEffect(() => {
    axios.get("http://localhost:1017/api/products")
      .then(res => setData(res.data))
      .catch(err => console.error("Fetch error:", err))
  }, [data])


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:1017/api/products/${id}`);
      
      if (response.status === 200) {
        // Remove the deleted todo from the list
        setData(prev => prev.filter(task => task._id !== id));
      } else {
        console.error('Error deleting todo:', response.data);
      }
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };


  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {data.map((item) => (
        <div
          key={item._id}
          className="w-full sm:w-64 bg-green rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.prodName}</h3>
          <p className="text-gray-600 text-sm mb-1">{item.prodDes}</p>
          <p className="text-gray-800 font-medium mb-1">💲{item.prodPrice}</p>
          <p className="text-yellow-500 mb-1">⭐ {item.prodrating}</p>
          <p className="text-blue-600 text-sm mb-3">{item.prodCategory}</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-blue-500 transition-colors duration-200"
           onClick={()=>handleDelete(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>

  )
}

export default App
