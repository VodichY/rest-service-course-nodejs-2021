const TaskModel = require("./task.model")
const MemoryDB = require("../../common/memoryDB");
/**
 * Module for task_memory_repository related functions.
 * @module task_memory_repository
 */

/**
 * 
 * @param {String} boardId 
 * @returns {Array} finded tasks by id board 
 */
const getAll = async (boardId) => MemoryDB.getAll("Tasks").then(tasks => tasks.filter(task => task.boardId === boardId));

/**
 * 
 * @param {String} boardId 
 * @param {String} taskId 
 * @returns {Object} finded task by id board and id task 
 */
const getTaskById = async (boardId, taskId) => MemoryDB.getById(taskId, "Tasks").then(task => task && task.boardId === boardId ? task : undefined);

/**
 * 
 * @param {String} taskJson 
 * @param {String} boardId 
 * @returns {Object} created task
 */
const createTask = async (taskJson, boardId) => {
  const Task = new TaskModel(taskJson);
  Task.boardId = boardId;
  return MemoryDB.createObj(Task, "Tasks"); 
};

/**
 * 
 * @param {String} boardId 
 * @param {String} taskId 
 * @param {String} taskJson 
 * @returns {Object} updated task
 */
const updateTask = async (boardId, taskId, taskJson) => {  
  const obj = await getTaskById(boardId, taskId);  
  return MemoryDB.updateObj(obj, taskJson, "Tasks");
}

/**
 * 
 * @param {String} boardId 
 * @param {String} taskId 
 * @returns {Boolean} solved action
 */
const deleteTask = async (boardId, taskId) => {
  const obj = await getTaskById(boardId, taskId);  
  return MemoryDB.deleteObj(obj, "Tasks");
}

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };
