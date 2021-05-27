/**
 * Module for board_memory_repository related functions.
 * @module board_memory_repository
 */

const BoardModel = require("./board.model")
const MemoryDB = require("../../common/memoryDB");

/**
 * 
 * @returns {Array} finded boards
 */
const getAll = async () => MemoryDB.getAll("Boards");

/**
 * 
 * @param {String} boardId 
 * @returns {Object} finded board
 */
const getBoardById = async (boardId) => MemoryDB.getById(boardId, "Boards");

/**
 * 
 * @param {String} boardJson 
 * @returns {Object} created board
 */
const createBoard = async (boardJson) => {
  const Board = new BoardModel(boardJson);
  return MemoryDB.createObj(Board, "Boards"); 
};

/**
 * 
 * @param {String} boardId 
 * @param {String} boardJson 
 * @returns {Object} updated board
 */
const updateBoard = async (boardId, boardJson) => MemoryDB.updateById(boardId, boardJson, "Boards")

/**
 * 
 * @param {String} boardId 
 * @returns {Boolean} solved action
 */
const deleteBoard = async (boardId) => {
  const isDeleted = await MemoryDB.deleteById(boardId, "Boards");
  if (isDeleted) {
    const Tasks = await MemoryDB.getAll("Tasks");
    const arrayPromise = []; 
    Tasks.filter(task => task.boardId === boardId).forEach(task => {
        arrayPromise.push(MemoryDB.deleteById(task.id, "Tasks"));   
    });
    return Promise.all(arrayPromise);
  }
  return isDeleted;
}

module.exports = { getAll, getBoardById, createBoard, updateBoard, deleteBoard };
