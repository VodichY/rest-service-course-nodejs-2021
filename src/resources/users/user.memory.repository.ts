import { Task } from '../tasks/task.model';
import { User } from './user.model';
import * as MemoryDB from "../../common/memoryDB";

const getAllUsersRep = async () => MemoryDB.getAll("Users");

const getUserByIdRep = async (userId: string) => MemoryDB.getById(userId, "Users");

const createUserRep = async (userJson: { [key: string]: string }) => {
  const user = new User(userJson);
  return MemoryDB.createObj(user, "Users");
};

const updateUserRep = async (userId: string, userJson: string) => MemoryDB.updateById(userId, userJson, "Users")

const deleteUserRep = async (userId: string) => {
  const isDeleted = await MemoryDB.deleteById(userId, "Users");
  if (isDeleted) {
    const Tasks = await MemoryDB.getAll("Tasks");
    Tasks.filter((task: MemoryDB.IObjectId) => task instanceof Task && task.userId === userId).forEach((task: MemoryDB.IObjectId) => {
      Object.assign(task, { userId: null });
    });
    return true;
  }
  return isDeleted;
}


export { getAllUsersRep, getUserByIdRep, createUserRep, updateUserRep, deleteUserRep };
