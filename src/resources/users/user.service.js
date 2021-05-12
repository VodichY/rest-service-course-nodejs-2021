const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUserById = (userId) => usersRepo.getUserById(userId);

const postUser = (User) => usersRepo.postUser(User);

module.exports = { getAll, getUserById, postUser };
