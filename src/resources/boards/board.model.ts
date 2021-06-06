import { v1 } from 'uuid';
import { IObjectId } from "../../common/memoryDB";

export class Board implements IObjectId {
  id: string;

  title: string;

  columns: { order: number, title: string }[];

  constructor({
    id = v1(),
    title = 'title',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}


