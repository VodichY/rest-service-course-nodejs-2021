import * as boardsRepo from './board.memory.repository';

const getAllBoards = () => boardsRepo.getAllBoardsRep();

const getBoardById = (boardId: string) => boardsRepo.getBoardByIdRep(boardId);

const createBoard = (board: { [key: string]: string }) => boardsRepo.createBoardRep(board);

const updateBoard = (boardId: string, board: string) => boardsRepo.updateBoardRep(boardId, board);

const deleteBoard = (boardId: string) => boardsRepo.deleteBoardRep(boardId);

export { getAllBoards, getBoardById, createBoard, updateBoard, deleteBoard };
