const usersRepo = require('./user.memory.repository');


const getAllUsers = () => usersRepo.getAll();

const getUserById = (userId: string) => usersRepo.getUserById(userId);

const createUser = (user: string) => usersRepo.createUser(user);

const updateUser = (userId: string, user: string) => usersRepo.updateUser(userId, user);

const deleteUser = (userId: string) => usersRepo.deleteUser(userId);

module.exports = { getAll: getAllUsers, getUserById, createUser, updateUser, deleteUser };
