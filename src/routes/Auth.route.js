import express from "express";
import { AuthController } from "../controllers/index.js";
import { AuthValidation } from "../validations/index.js";
import validate from "../middlewares/validate.js";
const router = express.Router();

router.post("/login", validate(AuthValidation.Login), AuthController.Login);

router.post(
  "/register",
  validate(AuthValidation.Register),
  AuthController.Register
);

router.post("/logout", validate(AuthValidation.Logout), AuthController.logout);
export default router;
