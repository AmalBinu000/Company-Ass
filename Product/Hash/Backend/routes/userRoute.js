import express from "express";
import { loginUser, regUser } from "../controllers/authcontroller";

const router = express.Router();

router.post("/signup",regUser);
router.post("/signIn",loginUser);


export default router;