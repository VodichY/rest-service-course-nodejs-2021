import { Request, Response, Router } from "express";
import { User } from "./user.model";
import * as usersService from './user.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const users = await usersService.getAllUsers();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req: Request, res: Response) => {
  const user = await usersService.getUserById(req.params['userId'] as string);
  res.status(200).json(User.toResponse(user as User));
});

router.route('/').post(async (req: Request, res: Response) => {
  const user = await usersService.createUser(req.body);
  res.status(201).json(User.toResponse(user as User));
});

router.route('/:userId').put(async (req: Request, res: Response) => {
  const user = await usersService.updateUser(req.params['userId'] as string, req.body);
  res.status(200).json(User.toResponse(user as User));
});

router.route('/:userId').delete(async (req: Request, res: Response) => {
  const users = await usersService.deleteUser(req.params['userId'] as string);
  if (users) {
    res.status(204).json();
  } else {
    res.status(404).json();
  }
});

export { router };
