import Item from './Item';

class ConjuredItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  static of(name: string, sellIn: number, quality: number) {
    return new ConjuredItem(name, sellIn, quality);
  }

  update() {
    this.decreaseSellIn();
    this.decreaseQuality(2);
  }
}

export default ConjuredItem;
