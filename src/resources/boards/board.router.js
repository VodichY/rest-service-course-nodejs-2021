const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.status(200).json(boards); 
});

router.route('/:boardId').get(async (req, res) => {
  const board = await boardsService.getBoardById(req.params.boardId);
  res.status(200).json(board);
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.createBoard(req.body);
  res.status(201).json(board);
});

router.route('/:boardId').put(async (req, res) => {
  const board = await boardsService.updateBoard(req.params.boardId, req.body);
  res.status(200).json(board);
});

router.route('/:boardId').delete(async (req, res) => {
  const boards = await boardsService.deleteBoard(req.params.boardId);
  if (boards) {
    res.status(204).json();
  } else {
    res.status(404).json();
  }  
});

module.exports = router;
