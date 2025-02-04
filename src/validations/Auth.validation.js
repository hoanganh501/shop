import Joi from "joi";

const Login = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
};

const Register = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
};

const Logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const RefreshToken = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};
export default { Login, Register, Logout, RefreshToken };
