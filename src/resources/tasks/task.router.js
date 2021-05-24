const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  res.status(200).json(tasks); 
});

router.route('/:taskId').get(async (req, res) => {
  const task = await tasksService.getTaskById(req.params.boardId, req.params.taskId);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json([]);
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.createTask(req.body, req.params.boardId);
  res.status(201).json(task);
});

router.route('/:taskId').put(async (req, res) => {
  const task = await tasksService.updateTask(req.params.boardId, req.params.taskId, req.body);
  res.status(200).json(task);
});

router.route('/:taskId').delete(async (req, res) => {
  const tasks = await tasksService.deleteTask(req.params.boardId, req.params.taskId);
  if (tasks) {
    res.status(204).json();
  } else {
    res.status(404).json();
  }  
});

module.exports = router;
