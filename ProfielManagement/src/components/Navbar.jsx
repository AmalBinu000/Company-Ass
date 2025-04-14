import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SearchAndFilter from './SearchAndFilter';

const Navbar = ({ search, setSearch, onAdd }) => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    onAdd();
    navigate('/add');
  };

  return (
    <div className="flex justify-between items-center p-4 bg-green-100 shadow">
      <Link to="/" className="text-2xl font-bold text-green-800 hover:text-green-600">
        FarmInsta
      </Link>
      <div className="flex items-center gap-4 w-full max-w-4xl mx-auto">
        <SearchAndFilter search={search} setSearch={setSearch} />
        <button
          onClick={handleAddClick}
          className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 "
        >
          Add Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;
