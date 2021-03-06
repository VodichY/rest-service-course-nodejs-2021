import { Request, Response, Router } from "express";
import * as boardsService from './board.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardsService.getAllBoards();
  res.status(200).json(boards);
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  const board = await boardsService.getBoardById(req.params['boardId'] as string);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json([]);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const board = await boardsService.createBoard(req.body);
  res.status(201).json(board);
});

router.route('/:boardId').put(async (req: Request, res: Response) => {
  const board = await boardsService.updateBoard(req.params['boardId'] as string, req.body);
  res.status(200).json(board);
});

router.route('/:boardId').delete(async (req: Request, res: Response) => {
  const boards = await boardsService.deleteBoard(req.params['boardId'] as string);
  if (boards) {
    res.status(204).json();
  } else {
    res.status(404).json();
  }
});

export { router };
