import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2018/api/login', {
        email,
        password
      });

      // Store token in localStorage (you can use other storage methods)
      localStorage.setItem('token', response.data.token);

      // Redirect to home page after successful login
      navigate("/");
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-700">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to Your Account</h2>

                    {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                    <form onSubmit={handleLogin} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <a href="/signup" className="text-blue-600 hover:underline">
                        Signup here
                    </a>
                    </p>
                </div>
                </div>

  );
};

export default LoginForm;
