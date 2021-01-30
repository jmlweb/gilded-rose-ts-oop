import Item from './Item';

class GildedRose {
  items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].update();
    }

    return this.items;
  }
}

export default GildedRose;
