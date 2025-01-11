import dotenv from "dotenv";
import Joi from "joi";

dotenv.config();

const envSchema = Joi.object({
  MONGO_URL: Joi.string().required().description("MongoDB url"),
  PORT: Joi.number().integer().required(),
  JWT_SECRET: Joi.string().required().description("JWT secret key"),
  JWT_EXPIRES_ACCESS_MINUTES: Joi.number()
    .required()
    .description("JWT AccessToken expration"),
  JWT_EXPIRES_REFRESH_HOURS: Joi.number()
    .required()
    .description("JWT RefreshToken expration"),
  FRONTEND: Joi.string().required().description("front-end"),
})
  .unknown()
  .required();

const { error, value: envValue } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const env = {
  dbUrl: envValue.MONGO_URL,
  port: envValue.PORT,
  jwt: {
    jwt_secret: envValue.JWT_SECRET,
    jwt_accesstoken_expires: envValue.JWT_EXPIRES_ACCESS_MINUTES,
    jwt_refreshtoken_expires: envValue.JWT_EXPIRES_REFRESH_HOURS,
  },
  front_end: envValue.FRONTEND,
};
