import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Initialize navigate to use for redirecting

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if no token
    }

    axios.get('http://localhost:2018/api/home', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, [navigate]);

  // Handle logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8">
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Welcome to the Home Page</h2>
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
        >
            Logout
        </button>
        </div>

        <div className="space-y-3">
        {data.length > 0 ? (
            data.map((item, index) => (
            <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-md p-4 shadow-sm"
            >
                <p className="text-gray-700">{item}</p>
            </div>
            ))
        ) : (
            <p className="text-gray-500">No data available.</p>
        )}
        </div>
    </div>
    </div>

  );
};

export default Home;
