/**
 * Module for memoryDB related functions.
 * @module memoryDB
 */ 


const Data = {
    'Boards': [],
    'Columns': [],
    'Tasks': [],
    'Users': []
  };

/**
 * Returns the Array of tasks
 * @returns {Array} finded tasks
 */
  const getAll = async (objType) => Data[objType];

  /**
 * Returns the object of tasks by id
 * @param {String} id
 * @param {String} objType
 * @returns {Object} finded task
 */
  const getById = async (id, objType) => Data[objType].find(elem => elem.id === id);

  /**
   * Returns created task  
   * @param {Object} obj 
   * @param {String} objType 
   * @returns {Object} created task
   */
  const createObj = async (obj, objType) => {    
    Data[objType].push(obj); 
    return obj;
  };  

  /**
   * Returns updated task 
   * @param {Object} obj 
   * @param {String} objJson 
   * @returns {Object} updated task
   */
  const updateObj = async (obj, objJson) => Object.assign(obj, objJson);

  /**
   * Returns updated task
   * @param {String} id 
   * @param {String} objJson 
   * @param {String} objType 
   * @returns {Object} updated task 
   */
  const updateById = async (id, objJson, objType) => {    
    const obj = await getById(id, objType);  
    return updateObj(obj, objJson, objType); 
  }; 

  /**
   * Returns solved action
   * @param {Object} obj 
   * @param {String} objType 
   * @returns {Boolean} solved action
   */
  const deleteObj = async (obj, objType) => {    
    const indexObj = Data[objType].indexOf(obj);
    if (indexObj === -1) {
      return false;
    }
    return Data[objType].splice(indexObj,1) instanceof Array;
  };  

  /**
   * Returns solved action
   * @param {String} id 
   * @param {String} objType 
   * @returns {Boolean} solved action
   */
  const deleteById = async (id, objType) => {    
    const obj = Data[objType].find(elem => elem.id === id);
    return deleteObj(obj, objType);
  }; 

  module.exports = { Data, getAll, getById, createObj, updateObj,  updateById, deleteById, deleteObj };