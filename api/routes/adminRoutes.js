import express from "express";
const router = express.Router();
import { login, changePassword } from "../controllers/adminControllers.js";
import verifyToken from "../middlewares/verifyToken.js";

router.post("/login", login);
router.post("/verify-token", verifyToken);
router.post("/change-password", changePassword);

export default router;
