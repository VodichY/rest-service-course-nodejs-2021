const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUserById = (userId) => usersRepo.getUserById(userId);

const createUser = (user) => usersRepo.createUser(user);

const updateUser = (userId, user) => usersRepo.updateUser(userId, user);

const deleteUser = (userId) => usersRepo.deleteUser(userId);

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser};
