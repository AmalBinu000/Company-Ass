import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-white text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">🎉 Welcome to the Home Page!</h1>
        <p className="text-lg">You are now logged in.</p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-white text-indigo-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
