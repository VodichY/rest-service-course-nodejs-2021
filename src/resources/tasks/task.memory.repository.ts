const TaskModel = require("./task.model")
const MemoryDB = require("../../common/memoryDB");

const getAll = async (boardId) => MemoryDB.getAll("Tasks").then(tasks => tasks.filter(task => task.boardId === boardId));

const getTaskById = async (boardId, taskId) => MemoryDB.getById(taskId, "Tasks").then(task => task && task.boardId === boardId ? task : undefined);

const createTask = async (taskJson, boardId) => {
  const Task = new TaskModel(taskJson);
  Task.boardId = boardId;
  return MemoryDB.createObj(Task, "Tasks"); 
};

const updateTask = async (boardId, taskId, taskJson) => {  
  const obj = await getTaskById(boardId, taskId);  
  return MemoryDB.updateObj(obj, taskJson, "Tasks");
}

const deleteTask = async (boardId, taskId) => {
  const obj = await getTaskById(boardId, taskId);  
  return MemoryDB.deleteObj(obj, "Tasks");
}

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };
