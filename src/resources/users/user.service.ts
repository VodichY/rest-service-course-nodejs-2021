const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAll();

const getUserById = (userId: string) => usersRepo.getUserById(userId);

const createUser = (user: object) => usersRepo.createUser(user);

const updateUser = (userId: string, user: string) => usersRepo.updateUser(userId, user);

const deleteUser = (userId: string) => usersRepo.deleteUser(userId);

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
