import express from "express";
import { AuthController } from "../controllers/index.js";
import { AuthValidation } from "../validations/index.js";
import validate from "../middlewares/validate.js";
const router = express.Router();

router
  .route("/login")
  .post(validate(AuthValidation.Login), AuthController.Login);

export default router;
