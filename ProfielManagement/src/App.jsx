import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AddUserForm from "./components/AddUserForm";
import UserCard from "./components/UserCard";
import { setUsers } from "./redux/actions";
import useLocalStorage from "./hooks/useLocalStorage";
import Navbar from "./components/Navbar";

const Home = ({ users, onEdit, search }) => {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {filteredUsers.map((user, index) => (
        <UserCard key={index} user={user} index={index} onEdit={onEdit} />
      ))}
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [editableUser, setEditableUser] = useState(null);
  const [editableIndex, setEditableIndex] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("users");
    if (data) dispatch(setUsers(JSON.parse(data)));
  }, [dispatch]);

  useLocalStorage("users");

  return (
    <div className="p-4">
      <Navbar search={search} setSearch={setSearch} onAdd={() => {
        setEditableUser(null);
        setEditableIndex(null);
      }} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              users={users}
              search={search}
              onEdit={(user, i) => {
                setEditableUser(user);
                setEditableIndex(i);
              }}
            />
          }
        />
        <Route
          path="/add"
          element={
            <AddUserForm
              editableUser={editableUser}
              index={editableIndex}
              clearEdit={() => {
                setEditableUser(null);
                setEditableIndex(null);
              }}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
