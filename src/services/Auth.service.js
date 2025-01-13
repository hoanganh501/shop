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

const RegisterUser = async (user) => {
  console.log(user); //{ name: 'anh', email: 'lasw@gmail.com', password: '@Anh12346' }

  return await UserService.CreateUser(user);
};

export default { LoginUser, RegisterUser };
