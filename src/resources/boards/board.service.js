const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getBoardById = (boardId) => boardsRepo.getBoardById(boardId);

const createBoard = (board) => boardsRepo.createBoard(board);

const updateBoard = (boardId, board) => boardsRepo.updateBoard(boardId, board);

const deleteBoard = (boardId) => boardsRepo.deleteBoard(boardId);

module.exports = { getAll, getBoardById, createBoard, updateBoard, deleteBoard };
