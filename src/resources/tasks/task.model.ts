import { v1 } from 'uuid';
import { IObjectId } from "../../common/memoryDB";

export class Task implements IObjectId {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string;

  boardId: string;

  columnId: string;

  constructor({
    id = v1(),
    title = 'title',
    order = 0,
    description = '',
    userId = '',
    boardId = '',
    columnId = ''
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
