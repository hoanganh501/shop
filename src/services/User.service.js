import { User } from "../models/index.js";

/**
 * Asynchronously creates a new user in the database.
 *
 * @param {Object} user - The user object containing details for the new user.
 * @returns {Promise<Object>} - A promise that resolves to the newly created user object.
 */

const CreateUser = async (user) => {
  return await User.create(user);
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
  const user = await User.findOne({ email });
  if (!user) {
    return new Error("User not found");
  }
  return user;
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
