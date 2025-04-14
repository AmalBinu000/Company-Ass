import React from "react";
import { FaSearch } from "react-icons/fa"; 

const SearchAndFilter = ({ search, setSearch }) => {
  return (
    <div className="flex items-center space-x-3 border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-md w-full">
      <FaSearch className="text-gray-500" /> 
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 outline-none text-gray-700 placeholder-gray-500 bg-transparent"
      />
    </div>
  );
};

export default SearchAndFilter;
