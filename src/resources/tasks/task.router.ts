import { Request, Response, Router } from "express";

const tasksService = require('./task.service');

const router = Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response) => {
  const tasks = await tasksService.getAll(req.params['boardId']);
  res.status(200).json(tasks);
});

router.route('/:taskId').get(async (req: Request, res: Response) => {
  const task = await tasksService.getTaskById(req.params['boardId'], req.params['taskId']);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json([]);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const task = await tasksService.createTask(req.body, req.params['boardId']);
  res.status(201).json(task);
});

router.route('/:taskId').put(async (req: Request, res: Response) => {
  const task = await tasksService.updateTask(req.params['boardId'], req.params['taskId'], req.body);
  res.status(200).json(task);
});

router.route('/:taskId').delete(async (req: Request, res: Response) => {
  const tasks = await tasksService.deleteTask(req.params['boardId'], req.params['taskId']);
  if (tasks) {
    res.status(204).json();
  } else {
    res.status(404).json();
  }
});

export { router };
