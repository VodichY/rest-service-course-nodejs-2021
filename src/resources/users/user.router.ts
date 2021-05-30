import { Request, Response } from "express";

const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (_req: Request, res: Response) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req: Request, res: Response) => {
  const user = await usersService.getUserById(req.params['userId']);
  res.status(200).json(User.toResponse(user));
});

router.route('/').post(async (req: Request, res: Response) => {
  const user = await usersService.createUser(req.body);
  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req: Request, res: Response) => {
  const user = await usersService.updateUser(req.params['userId'], req.body);
  res.status(200).json(User.toResponse(user));
});

router.route('/:userId').delete(async (req: Request, res: Response) => {
  const users = await usersService.deleteUser(req.params['userId']);
  if (users) {
    res.status(204).json();
  } else {
    res.status(404).json();
  }
});

module.exports = router;
