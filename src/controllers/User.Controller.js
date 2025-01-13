import { UserService } from "../services/index.js";

const CreateUser = async (req, res) => {
  const user = await UserService.CreateUser(req.body);
  return res.status(201).send(user);
};

const GetUserById = async (req, res) => {
  const user = await UserService.GetUserById(req.params.id);
  if (!user) {
    throw new Error("User not found");
  }
  return res.status(200).send(user);
};

const UpdateUser = async (req, res) => {
  const user = await UserService.UpdateUser(req.params.id, req.body);
  return res.status(200).send(user);
};

const DeleteUser = async (req, res) => {
  const user = await UserService.DeleteUser(req.params.id);
  return res.status(200).send();
};

export default { CreateUser, GetUserById, UpdateUser, DeleteUser };
