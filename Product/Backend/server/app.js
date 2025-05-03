import express from "express"
import mongoose from "mongoose"
import prodRoute from "../routes/product.route.js"
import connectDB from "../config/db.js"
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())

app.use("/api",prodRoute)

connectDB()

app.listen(1017,()=>{
    console.log(`server running at http://localhost:1017`)
})
