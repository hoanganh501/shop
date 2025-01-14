import { AuthService, TokenService } from "../services/index.js";

const Login = async (req, res) => {
  const user = await AuthService.LoginUser(req.body.email, req.body.password);
  const token = await TokenService.generateAuthTokens(user);
  res.status(200).send({ user, token });
};

const Register = async (req, res) => {
  const user = await AuthService.RegisterUser(req.body);
  const token = await TokenService.generateAuthTokens(user);
  res.status(201).send({ user, token });
};

export default { Login, Register };
