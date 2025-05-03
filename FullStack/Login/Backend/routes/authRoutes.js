import express from 'express';
import { signup, login, getProfile } from '../controller/authController.js';
import protect from '../middleware/authMiddleware.js';

const Approuter = express.Router();

Approuter.post('/signup', signup);
Approuter.post('/login', login);
Approuter.get('/profile', protect, getProfile);

export default Approuter;
