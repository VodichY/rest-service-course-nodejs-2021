const UserModel = require("./user.model")
const MemoryDB = require("../../common/memoryDB");

const getAll = async () => MemoryDB.getAll("Users");

const getUserById = async (userId) => MemoryDB.getById(userId, "Users");

const createUser = async (userJson) => {
  const User = new UserModel(userJson);
  return MemoryDB.createObj(User, "Users"); 
};

const updateUser = async (userId, userJson) => MemoryDB.updateById(userId, userJson, "Users");

const deleteUser = async (userId) => MemoryDB.deleteById(userId, "Users");

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser};
