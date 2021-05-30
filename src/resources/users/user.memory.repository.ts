const UserModel = require("./user.model")
const MemoryDB = require("../../common/memoryDB");

const getAll = async () => MemoryDB.getAll("Users");

const getUserById = async (userId) => MemoryDB.getById(userId, "Users");

const createUser = async (userJson) => {
  const User = new UserModel(userJson);
  return MemoryDB.createObj(User, "Users"); 
};

const updateUser = async (userId, userJson) => MemoryDB.updateById(userId, userJson, "Users")

const deleteUser = async (userId) => {
  const isDeleted = MemoryDB.deleteById(userId, "Users");
  if (isDeleted) {
    const Tasks = await MemoryDB.getAll("Tasks");
    Tasks.filter(task => task.userId === userId).forEach(task => {
      Object.assign(task, { userId: null });
    });
    return true;
  }
  return isDeleted;
} 


module.exports = { getAll, getUserById, createUser, updateUser, deleteUser};
