const UserModel = require("../users/user.model")
const MemoryDB = require("../../common/memoryDB");

const getAll = async () => {
  return MemoryDB.getAll("Users");
};

const getUserById = async (userId) => {
  return MemoryDB.getById(userId, "Users");
};

const createUser = async (userJson) => {
  let User = new UserModel(userJson);
  return MemoryDB.createObj(User, "Users"); 
};

const updateUser = async (userId, userJson) => {
  return MemoryDB.updateObj(userId, userJson, "Users"); 
};

const deleteUser = async (userId) => {
  return MemoryDB.deleteObj(userId, "Users");
};

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser};
