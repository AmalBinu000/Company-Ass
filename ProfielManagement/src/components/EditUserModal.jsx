import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border p-4 rounded">
      <img src={user.imageUrl || "https://via.placeholder.com/150"} alt={user.name} className="w-24 h-24" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.description}</p>
      <p>{user.languages}</p>
      <p>{user.education}</p>
      <p>{user.specialization}</p>
      <a href={user.twitter} target="_blank" rel="noreferrer">Twitter</a>
      <a href={user.instagram} target="_blank" rel="noreferrer">Instagram</a>
    </div>
  );
};

export default UserCard;
