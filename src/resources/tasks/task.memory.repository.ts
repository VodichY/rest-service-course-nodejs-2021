import { Task } from "./task.model";
import * as MemoryDB from "../../common/memoryDB";

const getAllTasksRep = async (boardId: string) => MemoryDB.getAll("Tasks")
  .then((tasks: MemoryDB.IObjectId[]) => tasks.filter((task: MemoryDB.IObjectId) => task instanceof Task && task.boardId === boardId));

const getTaskByIdRep = async (boardId: string, taskId: string) => MemoryDB.getById(taskId, "Tasks")
  .then((task: MemoryDB.IObjectId | undefined) => (task instanceof Task && task.boardId === boardId) ? task : undefined);

const createTaskRep = async (taskJson: { [key: string]: string }, boardId: string) => {
  const task = new Task(taskJson);
  task.boardId = boardId;
  return MemoryDB.createObj(task, "Tasks");
};

const updateTaskRep = async (boardId: string, taskId: string, taskJson: string) => {
  const obj = await getTaskByIdRep(boardId, taskId) as Task;
  return MemoryDB.updateObj(obj, taskJson);
}

const deleteTaskRep = async (boardId: string, taskId: string) => {
  const obj = await getTaskByIdRep(boardId, taskId) as Task;
  return MemoryDB.deleteObj(obj, "Tasks");
}

export { getAllTasksRep, getTaskByIdRep, createTaskRep, updateTaskRep, deleteTaskRep };
