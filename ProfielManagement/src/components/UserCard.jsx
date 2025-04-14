import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa"; 

const UserCard = ({ user, index, onEdit }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    onEdit(user, index); 
    navigate("/add");    
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center">
        <img
          src={user.imageUrl || "https://via.placeholder.com/150"}
          alt={user.name}
          className="w-24 h-24 object-cover rounded-full border-2 border-green-400"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="mt-2 text-sm text-gray-500 text-center">{user.description}</p>

        <div className="mt-4 text-sm text-left w-full text-gray-700 space-y-1">
          <p><strong>Languages:</strong> {user.languages}</p>
          <p><strong>Education:</strong> {user.education}</p>
          <p><strong>Specialization:</strong> {user.specialization}</p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          {user.twitter && (
            <a
              href={user.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-300"
            >
              <FaTwitter className="inline-block mr-1" /> Twitter
            </a>
          )}
          {user.instagram && (
            <a
              href={user.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-red-400"
            >
              <FaInstagram className="inline-block mr-1" /> Instagram
            </a>
          )}
        </div>

        <button
          onClick={handleEdit}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition-colors duration-200"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
