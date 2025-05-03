import express from "express"
import dotenv from "dotenv"
import connectDB from "../config/db.js";
import regRoute from '../routes/register.route.js';

dotenv.config()
connectDB()

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;


app.use("/api",regRoute)

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})
