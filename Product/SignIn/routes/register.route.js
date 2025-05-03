import express from "express"
import { getUser, signIn } from "../controller/Register.controller.js"

const regRoute = express.Router()

regRoute.post("/user",getUser)
regRoute.post("/signIn",signIn)

export default regRoute;