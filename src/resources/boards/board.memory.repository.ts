import { Task } from "../tasks/task.model";
import { Board } from "./board.model";
import * as MemoryDB from "../../common/memoryDB";

const getAllBoardsRep = async () => MemoryDB.getAll("Boards");

const getBoardByIdRep = async (boardId: string) => MemoryDB.getById(boardId, "Boards");

const createBoardRep = async (boardJson: object) => {
  const board = new Board(boardJson);
  return MemoryDB.createObj(board, "Boards");
};

const updateBoardRep = async (boardId: string, boardJson: string) => MemoryDB.updateById(boardId, boardJson, "Boards")

const deleteBoardRep = async (boardId: string) => {
  const isDeleted = await MemoryDB.deleteById(boardId, "Boards");
  if (isDeleted) {
    const tasks = await MemoryDB.getAll("Tasks") as Task[];
    const arrayPromise: Array<Promise<boolean>> = [];
    tasks?.filter((task: Task) => task.boardId === boardId).forEach((task: Task) => {
      arrayPromise.push(MemoryDB.deleteById(task.id, "Tasks"));
    });
    return Promise.all(arrayPromise);
  }
  return isDeleted;
}

module.exports = { getAll: getAllBoardsRep, getBoardById: getBoardByIdRep, createBoard: createBoardRep, updateBoard: updateBoardRep, deleteBoard: deleteBoardRep };
