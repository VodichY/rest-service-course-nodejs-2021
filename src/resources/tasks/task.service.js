/**
 * Module for task_service related functions.
 * @module task_service
 */ 

const tasksRepo = require('./task.memory.repository');

/**
 * 
 * @param {String} boardId 
 * @returns {Array} finded tasks by id board 
 */
const getAll = (boardId) => tasksRepo.getAll(boardId);

/**
 * 
 * @param {String} boardId 
 * @param {String} taskId 
 * @returns {Object} finded task by id board and id task
 */
const getTaskById = (boardId, taskId) => tasksRepo.getTaskById(boardId, taskId);

/**
 * 
 * @param {String} task 
 * @param {String} boardId 
 * @returns {Object} created task
 */
const createTask = (task, boardId) => tasksRepo.createTask(task, boardId);

/**
 * 
 * @param {String} boardId 
 * @param {String} taskId 
 * @param {String} task 
 * @returns {Object} updated task
 */
const updateTask = (boardId, taskId, task) => tasksRepo.updateTask(boardId, taskId, task);

/**
 * 
 * @param {String} boardId 
 * @param {String} taskId 
 * @returns {Boolean} solved action
 */
const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };
