const BoardModel = require("./board.model")
const MemoryDB = require("../../common/memoryDB");

const getAll = async () => MemoryDB.getAll("Boards");

const getBoardById = async (boardId) => MemoryDB.getById(boardId, "Boards");

const createBoard = async (boardJson) => {
  const Board = new BoardModel(boardJson);
  return MemoryDB.createObj(Board, "Boards"); 
};

const updateBoard = async (boardId, boardJson) => MemoryDB.updateById(boardId, boardJson, "Boards")

const deleteBoard = async (boardId) => {
  const isDeleted = await MemoryDB.deleteById(boardId, "Boards");
  if (isDeleted) {
    const Tasks = await MemoryDB.getAll("Tasks");
    const arrayPromise = []; 
    Tasks.forEach(task => {
      if (task.boardId === boardId) {
        arrayPromise.push(MemoryDB.deleteById(task.id, "Tasks"));
      }      
    });
    return Promise.all(arrayPromise);
  }
  return isDeleted;
}

module.exports = { getAll, getBoardById, createBoard, updateBoard, deleteBoard };
