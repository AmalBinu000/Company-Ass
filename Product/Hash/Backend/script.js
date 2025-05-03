import express from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";

dotenv.config()

PORT = process.env.PORT || 3000

connectDB()

const app = express()
app.use(express.json())



app.listen(PORT,()=>{
    console.log(`sever started on http://localhost:${PORT}`)
})