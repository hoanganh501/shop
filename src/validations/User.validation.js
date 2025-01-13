import Joi from "joi";
import ROLES from "../config/type.js";

const CreateUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    role: Joi.string()
      .valid(...Object.keys(ROLES))
      .default("user"),
  }),
};

const UpdateUser = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
  }),
};

const DeleteUser = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const GetUserById = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export default { CreateUser, UpdateUser, DeleteUser, GetUserById };
