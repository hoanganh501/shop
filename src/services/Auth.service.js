import { User } from "../models/index.js";
import UserService from "./User.service.js";

const LoginUser = async (email, password) => {
  const user = await UserService.GetUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }
  console.log(user);

  const isPasswordMatch = await user.isPasswordMatch(password);
  if (!isPasswordMatch) {
    throw new Error("Invalid password");
  }
  return user;
};

export default { LoginUser };
