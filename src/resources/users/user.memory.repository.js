const userModel = require("./user.model");

const MemoryDB = {
  'Boards': [],
  'Columns': [],
  'Tasks': [],
  'Users': []
};

const getAll = async () => {
  return MemoryDB.Users;
};

const getUserById = async (userId) => {
  return MemoryDB.Users.find(user => user.id === userId);
};

const postUser = async (userJson) => {
  let User = new userModel(userJson); 
  MemoryDB.Users.push(User);
  return User;
};

module.exports = { getAll, getUserById, postUser};
