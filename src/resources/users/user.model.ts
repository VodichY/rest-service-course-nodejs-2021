import { v1 } from 'uuid';
import { IObjectId } from '../../common/memoryDB'


export class User implements IObjectId {
  id: string;
  name: string;
  login: string;
  password: string;
  constructor({
    id = v1(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
