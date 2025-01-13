import { User } from "../models/index.js";

/**
 * Asynchronously creates a new user in the database.
 *
 * @param {Object} user - The user object containing details for the new user.
 * @returns {Promise<Object>} - A promise that resolves to the newly created user object.
 */

const CreateUser = async (user) => {
  const user_info = await GetUserByEmail(user.email);
  if (user_info) {
    throw new Error("User already exists");
  }
  return await User.create(user_info);
};

/**
 * Asynchronously finds a user in the database by their ID.
 *
 * @param {string} id - The user's ID.
 * @returns {Promise<Object>} - A promise that resolves to the user object if found, null otherwise.
 */
const GetUserById = async (id) => {
  return await User.findById(id);
};

/**
 * Asynchronously finds a user in the database by their email.
 *
 * @param {string} email - The user's email.
 * @returns {Promise<Object>} - A promise that resolves to the user object if found, null otherwise.
 */
const GetUserByEmail = async (email) => {
  return await User.findOne({ email });
};

/**
 * Asynchronously updates a user in the database by their ID.
 *
 * @param {string} id - The user's ID.
 * @param {Object} user - The user object containing updated details.
 * @returns {Promise<Object>} - A promise that resolves to the updated user object.
 */

const UpdateUser = async (id, user) => {
  const user_info = await GetUserById(id);
  if (!user_info) {
    return new Error("User not found");
  }
  user_info.set(user);
  return await user_info.save();
};

/**
 * Asynchronously deletes a user from the database by their ID.
 *
 * @param {string} id - The user's ID.
 * @returns {Promise<Object>} - A promise that resolves to the deleted user object.
 */
const DeleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

export default {
  CreateUser,
  GetUserById,
  GetUserByEmail,
  UpdateUser,
  DeleteUser,
};
