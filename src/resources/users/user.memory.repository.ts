const UserModel = require("./user.model")
const MemoryDB = require("../../common/memoryDB");
import { Task } from '../tasks/task.model';

const getAllUsersRep = async () => MemoryDB.getAll("Users");

const getUserByIdRep = async (userId: string) => MemoryDB.getById(userId, "Users");

const createUserRep = async (userJson: string) => {
  const User = new UserModel(userJson);
  return MemoryDB.createObj(User, "Users");
};

const updateUserRep = async (userId: string, userJson: string) => MemoryDB.updateById(userId, userJson, "Users")

const deleteUserRep = async (userId: string) => {
  const isDeleted = MemoryDB.deleteById(userId, "Users");
  if (isDeleted) {
    const Tasks = await MemoryDB.getAll("Tasks");
    Tasks.filter((task: Task) => task.userId === userId).forEach((task: Task) => {
      Object.assign(task, { userId: null });
    });
    return true;
  }
  return isDeleted;
}


module.exports = { getAll: getAllUsersRep, getUserById: getUserByIdRep, createUser: createUserRep, updateUser: updateUserRep, deleteUser: deleteUserRep };
