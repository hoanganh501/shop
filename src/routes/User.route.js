import express from "express";
import { UserController } from "../controllers/index.js";
import { UserValidation } from "../validations/index.js";
import validate from "../middlewares/validate.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router
  .route("/")
  .post(
    auth("create:users"),
    validate(UserValidation.CreateUser),
    UserController.CreateUser
  );

router
  .route("/:id")
  .get(
    auth("view:users"),
    validate(UserValidation.GetUserById),
    UserController.GetUserById
  )
  .patch(
    auth("update:users"),
    validate(UserValidation.UpdateUser),
    UserController.UpdateUser
  )
  .delete(
    auth("delete:users"),
    validate(UserValidation.DeleteUser),
    UserController.DeleteUser
  );

export default router;
