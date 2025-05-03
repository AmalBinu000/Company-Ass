import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/noteRoute.js';
import cors from 'cors';




dotenv.config()

const app = express()

connectDB()

app.use(express.json())
app.use(cors())
app.use('/api',router)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})