import { Router } from "express"; // router na, Router
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'coverPhoto', maxCount: 1 }
    ]),
    registerUser);

export default router;