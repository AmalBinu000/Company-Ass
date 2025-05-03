
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import UserModel from '../model/user.js';

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await argon2.hash(password);

    const newUser = new UserModel({ username, email, password:hashedPassword });
    await newUser.save();

    res.status(201).json({ newUser });
  } catch (err) {
    res.status(400).json({ error: 'Signup failed', details: err.message });
    
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user || !(await argon2.verify(user.password, password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
};

export const getProfile = (req, res) => {
  res.json({ message: 'Welcome to the Home Page', user: req.user });
};
