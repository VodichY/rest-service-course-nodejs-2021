const tasksRepo = require('./task.memory.repository');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const getTaskById = (boardId, taskId) => tasksRepo.getTaskById(boardId, taskId);

const createTask = (task, boardId) => tasksRepo.createTask(task, boardId);

const updateTask = (boardId, taskId, task) => tasksRepo.updateTask(boardId, taskId, task);

const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };
