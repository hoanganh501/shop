import { AuthService, TokenService, UserService } from "../services/index.js";

const Login = async (req, res) => {
  const user = await AuthService.LoginUser(req.body.email, req.body.password);
  const token = await TokenService.generateAuthTokens(user);
  console.log(req.headers);
  res.status(200).send({ user, token });
};

const Register = async (req, res) => {
  const user = await UserService.CreateUser(req.body);
  const token = await TokenService.generateAuthTokens(user);
  res.status(201).send({ user, token });
};

const logout = async (req, res) => {
  const token = await AuthService.LogoutUser(req.body.refreshToken);
  res.status(200).send({
    success: true,
  });
};

const refreshToken = async (req, res) => {
  const token = await AuthService.refreshToken(req.body.refreshToken);
  res.status(200).send(token);
};

export default { Login, Register, logout, refreshToken };
