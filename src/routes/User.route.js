import express from "express";
import { UserController } from "../controllers/index.js";
import { UserValidation } from "../validations/index.js";
import validate from "../middlewares/validate.js";
const router = express.Router();

router
  .route("/")
  .post(validate(UserValidation.CreateUser), UserController.CreateUser);

router
  .route("/:id")
  .get(validate(UserValidation.GetUserById), UserController.GetUserById)
  .patch(validate(UserValidation.UpdateUser), UserController.UpdateUser)
  .delete(validate(UserValidation.DeleteUser), UserController.DeleteUser);

export default router;
