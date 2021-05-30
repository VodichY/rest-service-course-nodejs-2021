interface IDB {
  [key: string]: IObjectId[];
}
export interface IObjectId {
  id: string;
}
const Data: IDB = {
  'Boards': [],
  'Columns': [],
  'Tasks': [],
  'Users': []
};

const getAll = async (objType: string) => Data[objType];

const getById = async (id: string, objType: string) => Data[objType]?.find((elem: IObjectId) => elem.id === id);

const createObj = async (obj: IObjectId, objType: string) => {
  Data[objType]?.push(obj);
  return obj;
};

const updateObj = async (obj: IObjectId, objJson: string) => Object.assign(obj, objJson);

const updateById = async (id: string, objJson: string, objType: string) => {
  const obj = await getById(id, objType) as IObjectId;
  return updateObj(obj, objJson);
};

const deleteObj = async (obj: IObjectId, objType: string) => {
  let objs = Data[objType];
  if (objs === undefined) {
    return false;
  }
  const indexObj = objs.indexOf(obj);
  if (indexObj === -1 || indexObj === undefined) {
    return false;
  }
  return objs.splice(indexObj, 1) instanceof Array;
};

const deleteById = async (id: string, objType: string) => {
  const obj = Data[objType]?.find((elem: IObjectId) => elem.id === id) as IObjectId;
  return deleteObj(obj, objType);
};

module.exports = { Data, getAll, getById, createObj, updateObj, updateById, deleteById, deleteObj };