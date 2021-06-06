import { Request, Response, Router } from "express";
import * as tasksService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response) => {
  const tasks = await tasksService.getAllTasks(req.params['boardId'] as string);
  res.status(200).json(tasks);
});

router.route('/:taskId').get(async (req: Request, res: Response) => {
  const task = await tasksService.getTaskById(req.params['boardId'] as string, req.params['taskId'] as string);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json([]);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const task = await tasksService.createTask(req.body, req.params['boardId'] as string);
  res.status(201).json(task);
});

router.route('/:taskId').put(async (req: Request, res: Response) => {
  const task = await tasksService.updateTask(req.params['boardId'] as string, req.params['taskId'] as string, req.body);
  res.status(200).json(task);
});

router.route('/:taskId').delete(async (req: Request, res: Response) => {
  const tasks = await tasksService.deleteTask(req.params['boardId'] as string, req.params['taskId'] as string);
  if (tasks) {
    res.status(204).json();
  } else {
    res.status(404).json();
  }
});

export { router };
