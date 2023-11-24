class Store {
  item: any;

  constructor() {
    this.item = {};
  }

  setItem(key: string, item: any) {
    this.item[key] = item;
  }

  getItem(key: string) {
    return this.item[key];
  }
}

const mainStore = new Store();
mainStore.setItem('id', '');
mainStore.setItem('expire', '');

export default mainStore;
