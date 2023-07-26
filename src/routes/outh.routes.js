import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/auth/validateToken.js";
import { validateShema } from "../middlewares/validations/validator.midleware.js";
import { registerShema, loginShema } from "../schema/auth.shema.js";

const router = new Router();
const authController = new AuthController();

router.post("/register", validateShema(registerShema), authController.register);
router.post("/login", validateShema(loginShema)  ,authController.login);
router.get("/profile", authRequired, authController.profile);


export default router;
