import { AuthService } from "../services/index.js";

const Login = async (req, res) => {
  const user = await AuthService.LoginUser(req.body.email, req.body.password);
  res.status(200).send(user);
};

const Register = async (req, res) => {
  const user = await AuthService.RegisterUser(req.body);
  res.status(201).send(user);
};

export default { Login, Register };
