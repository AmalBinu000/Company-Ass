import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../redux/actions";
import { useNavigate } from "react-router-dom"; 

const AddUserForm = ({ editableUser, index, clearEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    languages: "",
    education: "",
    specialization: "",
    twitter: "",
    instagram: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (editableUser) {
      setFormData(editableUser);
    }
  }, [editableUser]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableUser) {
      dispatch(updateUser(formData, index));
      clearEdit();
    } else {
      dispatch(addUser(formData));
    }

    
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {editableUser ? "Edit User Profile" : "Add New User"}
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {[
          { name: "name", label: "Name" },
          { name: "email", label: "Email" },
          { name: "description", label: "Description" },
          { name: "languages", label: "Languages" },
          { name: "education", label: "Education" },
          { name: "specialization", label: "Specialization" },
          { name: "twitter", label: "Twitter URL" },
          { name: "instagram", label: "Instagram URL" },
          { name: "imageUrl", label: "Image URL" },
        ].map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.label}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          {editableUser ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
