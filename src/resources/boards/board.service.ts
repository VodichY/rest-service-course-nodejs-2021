const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAll();

const getBoardById = (boardId: string) => boardsRepo.getBoardById(boardId);

const createBoard = (board: string) => boardsRepo.createBoard(board);

const updateBoard = (boardId: string, board: string) => boardsRepo.updateBoard(boardId, board);

const deleteBoard = (boardId: string) => boardsRepo.deleteBoard(boardId);

module.exports = { getAll: getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard };
