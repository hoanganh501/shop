import { env } from "../config/environment.js";
import jwt from "jsonwebtoken";
import moment from "moment";
import { Token } from "../models/index.js";
import TokenTypes from "../config/token.js";

/**
 * Generates a JSON Web Token (JWT) for a user.
 *
 * @param {string} userID - The ID of the user for whom the token is being generated.
 * @param {Object} expire - A moment.js object representing the expiration time of the token.
 * @param {string} type - The type of token (e.g., "access" or "refresh").
 * @param {string} [secret=env.jwt.jwt_secret] - The secret key used to sign the token.
 * @returns {string} - A signed JWT token.
 */

const generateToken = (userID, expire, type, secret = env.jwt.jwt_secret) => {
  const payload = {
    sub: userID,
    exp: expire.unix(),
    type,
  };

  return jwt.sign(payload, secret);
};

const generateAuthTokens = (user) => {
  const accessTokenExpires = moment().add(
    env.jwt.jwt_accesstoken_expires,
    "minutes"
  );

  const accessToken = generateToken(
    user.id,
    accessTokenExpires,
    TokenTypes.ACCESS
  );

  const refreshTokenExpires = moment().add(
    env.jwt.jwt_refreshtoken_expires,
    "hours"
  );

  const refreshToken = generateToken(
    user.id,
    refreshTokenExpires,
    TokenTypes.REFRESH
  );

  saveToken(refreshToken, user.id, refreshTokenExpires, TokenTypes.REFRESH);
  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires.toDate(),
    },
    refresh: {
      token: refreshToken,
      expires: refreshTokenExpires.toDate(),
    },
  };
};

const saveToken = async (token, userId, refreshTokenExpires, type) => {
  return await Token.create({
    token,
    user: userId,
    type,
    expire: refreshTokenExpires.toDate(),
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, env.jwt.jwt_secret);
};

const TokenDocument = async (token, type) => {
  const palyload = await verifyToken(token);
  const tokendoc = await Token.findOne({
    token,
    type: type,
    user: palyload.sub,
  });

  if (!tokendoc) {
    throw new Error("Token not found");
  }
  return tokendoc;
};

export default {
  generateToken,
  generateAuthTokens,
  verifyToken,
  TokenDocument,
};
