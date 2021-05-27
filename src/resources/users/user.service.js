/**
 * Module for user_service related functions.
 * @module user_service
 */ 

const usersRepo = require('./user.memory.repository');

/**
 * 
 * @returns {Array} finded users
 */
const getAll = () => usersRepo.getAll();

/**
 * 
 * @param {String} userId 
 * @returns {Object} finded user
 */
const getUserById = (userId) => usersRepo.getUserById(userId);

/**
 * 
 * @param {String} user 
 * @returns {Object} created user
 */
const createUser = (user) => usersRepo.createUser(user);

/**
 * 
 * @param {String} userId 
 * @param {String} user 
 * @returns {Object} updated user
 */
const updateUser = (userId, user) => usersRepo.updateUser(userId, user);

/**
 * 
 * @param {String} userId 
 * @returns {Boolean} solved action
 */
const deleteUser = (userId) => usersRepo.deleteUser(userId);

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser};
