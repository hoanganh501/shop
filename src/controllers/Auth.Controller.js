import { AuthService } from "../services/index.js";

const Login = async (req, res) => {
  const user = await AuthService.LoginUser(req.body.email, req.body.password);
  res.status(200).send(user);
};

export default { Login };
