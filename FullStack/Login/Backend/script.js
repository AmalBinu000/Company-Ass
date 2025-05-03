import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import Approuter from './routes/authRoutes.js';

const app = express();
dotenv.config()
connectDB();


app.use(cors());
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Now Api is Activated!')
})

app.use('/api', Approuter);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
