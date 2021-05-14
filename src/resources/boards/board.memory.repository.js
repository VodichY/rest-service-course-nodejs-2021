const BoardModel = require("./board.model")
const MemoryDB = require("../../common/memoryDB");

const getAll = async () => MemoryDB.getAll("Boards");

const getBoardById = async (boardId) => MemoryDB.getById(boardId, "Boards");

const createBoard = async (boardJson) => {
  const Board = new BoardModel(boardJson);
  return MemoryDB.createObj(Board, "Boards"); 
};

const updateBoard = async (boardId, boardJson) => MemoryDB.updateObj(boardId, boardJson, "Boards");

const deleteBoard = async (boardId) => MemoryDB.deleteObj(boardId, "Boards");

module.exports = { getAll, getBoardById, createBoard, updateBoard, deleteBoard };
