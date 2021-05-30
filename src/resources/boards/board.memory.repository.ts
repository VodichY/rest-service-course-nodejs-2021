import { Task } from "../tasks/task.model";

const BoardModel = require("./board.model")
const MemoryDB = require("../../common/memoryDB");

const getAllBoardsRep = async () => MemoryDB.getAll("Boards");

const getBoardByIdRep = async (boardId: string) => MemoryDB.getById(boardId, "Boards");

const createBoardRep = async (boardJson: string) => {
  const Board = new BoardModel(boardJson);
  return MemoryDB.createObj(Board, "Boards");
};

const updateBoardRep = async (boardId: string, boardJson: string) => MemoryDB.updateById(boardId, boardJson, "Boards")

const deleteBoardRep = async (boardId: string) => {
  const isDeleted = await MemoryDB.deleteById(boardId, "Boards");
  if (isDeleted) {
    const Tasks = await MemoryDB.getAll("Tasks");
    const arrayPromise: Array<Promise<boolean>> = [];
    Tasks.filter((task: Task) => task.boardId === boardId).forEach((task: Task) => {
      arrayPromise.push(MemoryDB.deleteById(task.id, "Tasks"));
    });
    return Promise.all(arrayPromise);
  }
  return isDeleted;
}

module.exports = { getAll: getAllBoardsRep, getBoardById: getBoardByIdRep, createBoard: createBoardRep, updateBoard: updateBoardRep, deleteBoard: deleteBoardRep };
