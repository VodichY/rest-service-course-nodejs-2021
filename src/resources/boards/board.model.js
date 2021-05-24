const uuid = require('uuid');

class Board {
  constructor({
    id = uuid.v1(),
    title = 'title',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
