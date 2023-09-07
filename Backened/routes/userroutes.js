import { Router } from "express";
import { default as authUser } from "../controllers/usercontroller";

const router = Router();
 router.post('/auth', authUser);
export default router;
