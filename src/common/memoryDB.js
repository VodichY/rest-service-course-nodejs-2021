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

  const updateObj = async (id, objJson, objType) => {    
    const obj = await getById(id, objType);  
    return Object.assign(obj, objJson); 
  }; 

  const deleteObj = async (id, objType) => {    
    const obj = Data[objType].find(elem => elem.id === id);
    const indexObj = Data[objType].indexOf(obj);
    return Data[objType].splice(indexObj,1).length;
  }; 

  module.exports = { Data, getAll, getById, createObj, updateObj, deleteObj};