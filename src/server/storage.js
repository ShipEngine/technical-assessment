class Storage {
  data = {};

  constructor(data) {
    this.data = data.reduce((indexedItems, item) => {
      return { ...indexedItems, [String(item.id)]: item };
    }, {});
  }

  all() {
    return Object.values(this.data);
  }

  get(id) {
    return this.data[id];
  }

  set(id, data) {
    this.data[id] = data;
  }
}

const createStorage = (data) => new Storage(data);

export default createStorage;
