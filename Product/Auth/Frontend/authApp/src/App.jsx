import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home'; // We'll create this next

const App = () => {
  return (
    
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/signup" element={<SignupForm/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    
  );
};

export default App;
