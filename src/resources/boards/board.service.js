/**
 * Module for board_service related functions.
 * @module board_service
 */ 

const boardsRepo = require('./board.memory.repository');

/**
 * 
 * @returns {Array} finded tasks
 */
const getAll = () => boardsRepo.getAll();

/**
 * 
 * @param {String} boardId 
 * @returns {Object} finded board
 */
const getBoardById = (boardId) => boardsRepo.getBoardById(boardId);

/**
 * 
 * @param {String} board 
 * @returns {Object} created board
 */
const createBoard = (board) => boardsRepo.createBoard(board);

/**
 * 
 * @param {String} boardId 
 * @param {String} board 
 * @returns {Object} updated board
 */
const updateBoard = (boardId, board) => boardsRepo.updateBoard(boardId, board);

/**
 * 
 * @param {String} boardId 
 * @returns {Boolean} solved action
 */
const deleteBoard = (boardId) => boardsRepo.deleteBoard(boardId);

module.exports = { getAll, getBoardById, createBoard, updateBoard, deleteBoard };
