const Data = {
    'Boards': [],
    'Columns': [],
    'Tasks': [],
    'Users': []
  };

  const getAll = async (objType) => Data[objType];

  const getById = async (id, objType) => Data[objType].find(elem => elem.id === id);

  const createObj = async (obj, objType) => {    
    Data[objType].push(obj); 
    return obj;
  };  

  const updateObj = async (obj, objJson) => Object.assign(obj, objJson);

  const updateById = async (id, objJson, objType) => {    
    const obj = await getById(id, objType);  
    return updateObj(obj, objJson, objType); 
  }; 

  const deleteObj = async (obj, objType) => {    
    const indexObj = Data[objType].indexOf(obj);
    if (indexObj === -1) {
      return false;
    }
    return Data[objType].splice(indexObj,1) instanceof Array;
  };  

  const deleteById = async (id, objType) => {    
    const obj = Data[objType].find(elem => elem.id === id);
    return deleteObj(obj, objType);
  }; 

  module.exports = { Data, getAll, getById, createObj, updateObj,  updateById, deleteById, deleteObj };