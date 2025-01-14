import { Token, User } from "../models/index.js";
import UserService from "./User.service.js";

const LoginUser = async (email, password) => {
  const user = await UserService.GetUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordMatch = await user.isPasswordMatch(password);
  if (!isPasswordMatch) {
    throw new Error("Invalid password");
  }
  return user;
};

const LogoutUser = async (refreshToken) => {
  const token = await Token.deleteOne({ token: refreshToken });
  if (!token.ok === 1) {
    throw new Error("logout fail");
  }
  return true;
};

export default { LoginUser, LogoutUser };
