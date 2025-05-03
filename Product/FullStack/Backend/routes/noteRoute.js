import express from 'express';
import { deleteUser, getUser, getUserById, patchUser, postUser } from '../controllers/noteController.js';

const router = express.Router()

router.post("/note",postUser)
router.get("/note",getUser)
router.get("/note/:id",getUserById)
router.patch("/note/:id",patchUser)
router.delete("/note/:id",deleteUser)

export default router;