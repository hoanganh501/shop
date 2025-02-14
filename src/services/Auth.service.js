import tokenTypes from "../config/token.js";
import { Token, User } from "../models/index.js";
import TokenService from "./Token.service.js";
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

const refreshToken = async (refreshToken) => {
  const tokendoc = await TokenService.TokenDocument(
    refreshToken,
    tokenTypes.REFRESH
  );
  const user = await UserService.GetUserById(tokendoc.user);
  if (!user) {
    throw new Error("Token not found");
  }
  await Token.deleteOne({ token: refreshToken });
  return TokenService.generateAuthTokens(user);
};

export default { LoginUser, LogoutUser, refreshToken };
