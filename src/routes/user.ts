import { Router } from "express";
import register from "../controllers/register";
import { validation } from "../middlewares/validation";
const router=Router()

router.post("/register",validation,register)

export default router;