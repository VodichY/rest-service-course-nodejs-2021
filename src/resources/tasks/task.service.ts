const tasksRepo = require('./task.memory.repository');

const getAllTasks = (boardId: string) => tasksRepo.getAll(boardId);

const getTaskById = (boardId: string, taskId: string) => tasksRepo.getTaskById(boardId, taskId);

const createTask = (task: object, boardId: string) => tasksRepo.createTask(task, boardId);

const updateTask = (boardId: string, taskId: string, task: string) => tasksRepo.updateTask(boardId, taskId, task);

const deleteTask = (boardId: string, taskId: string) => tasksRepo.deleteTask(boardId, taskId);

module.exports = { getAll: getAllTasks, getTaskById, createTask, updateTask, deleteTask };
