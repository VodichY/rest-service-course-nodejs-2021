/**
 * Module for user_memory_repository related functions.
 * @module user_memory_repository
 */

const UserModel = require("./user.model")
const MemoryDB = require("../../common/memoryDB");

/**
 * 
 * @returns {Array} finded users
 */
const getAll = async () => MemoryDB.getAll("Users");

/**
 * 
 * @param {String} userId 
 * @returns {Object} finded user
 */
const getUserById = async (userId) => MemoryDB.getById(userId, "Users");

/**
 * 
 * @param {String} userJson 
 * @returns {Object} created user
 */
const createUser = async (userJson) => {
  const User = new UserModel(userJson);
  return MemoryDB.createObj(User, "Users"); 
};

/**
 * 
 * @param {String} userId 
 * @param {String} userJson 
 * @returns {Object} updated user
 */
const updateUser = async (userId, userJson) => MemoryDB.updateById(userId, userJson, "Users")

/**
 * 
 * @param {String} userId 
 * @returns {Boolean} solved action
 */
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
