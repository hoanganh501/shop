import tokenTypes from "../config/token.js";
import ROLES from "../config/type.js";
import { TokenService, UserService } from "../services/index.js";

const auth = (...roles) => {
  return async (req, res, next) => {
    await validateTokenAndUser(req);
    const user = req.user;

    const rolePermissions = ROLES[user.role];

    if (!rolePermissions.includes(...roles)) {
      throw new Error("Unauthorized");
    }
    next();
  };
};

const validateTokenAndUser = async (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  const decodedToken = await TokenService.verifyToken(token);

  if (!decodedToken) {
    throw new Error("Please authentication");
  }
  const user = await UserService.GetUserById(decodedToken.sub);
  if (!user) {
    throw new Error("User not found");
  }
  req.user = user;
};

export default auth;
