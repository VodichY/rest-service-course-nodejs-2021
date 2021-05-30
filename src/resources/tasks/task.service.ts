import * as tasksRepo from './task.memory.repository';

const getAllTasks = (boardId: string) => tasksRepo.getAllTasksRep(boardId);

const getTaskById = (boardId: string, taskId: string) => tasksRepo.getTaskByIdRep(boardId, taskId);

const createTask = (task: { [key: string]: string }, boardId: string) => tasksRepo.createTaskRep(task, boardId);

const updateTask = (boardId: string, taskId: string, task: string) => tasksRepo.updateTaskRep(boardId, taskId, task);

const deleteTask = (boardId: string, taskId: string) => tasksRepo.deleteTaskRep(boardId, taskId);

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
