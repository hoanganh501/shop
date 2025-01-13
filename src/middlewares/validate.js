import Joi from "joi";
import pick from "../utils/pick.js";

/**
 * A middleware that validates an express request against a Joi schema.
 *
 * @param {Object} schema - A Joi schema with keys "params", "query", and/or "body".
 * @returns {Function} - A middleware that validates the request and calls
 *   `next()` if it is valid, else sends a 400 response with an error message.
 */
const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));

  const schemaToValidate = Joi.object(validSchema);

  const { value, error } = schemaToValidate
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .validate(object);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return next(new Error(errorMessage));
  }
  Object.assign(req, value);
  return next();
};

export default validate;
