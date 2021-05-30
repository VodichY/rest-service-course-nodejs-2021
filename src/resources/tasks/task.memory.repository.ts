import { Task } from "./task.model";

const TaskModel = require("./task.model")
const MemoryDB = require("../../common/memoryDB");

const getAllTasksRep = async (boardId: string) => MemoryDB.getAll("Tasks").then((tasks: Task[]) => tasks.filter((task: Task) => task.boardId === boardId));

const getTaskByIdRep = async (boardId: string, taskId: string) => MemoryDB.getById(taskId, "Tasks").then((task: Task) => task && task.boardId === boardId ? task : undefined);

const createTaskRep = async (taskJson: string, boardId: string) => {
  const Task = new TaskModel(taskJson);
  Task.boardId = boardId;
  return MemoryDB.createObj(Task, "Tasks");
};

const updateTaskRep = async (boardId: string, taskId: string, taskJson: string) => {
  const obj = await getTaskByIdRep(boardId, taskId);
  return MemoryDB.updateObj(obj, taskJson, "Tasks");
}

const deleteTaskRep = async (boardId: string, taskId: string) => {
  const obj = await getTaskByIdRep(boardId, taskId);
  return MemoryDB.deleteObj(obj, "Tasks");
}

module.exports = { getAll: getAllTasksRep, getTaskById: getTaskByIdRep, createTask: createTaskRep, updateTask: updateTaskRep, deleteTask: deleteTaskRep };
