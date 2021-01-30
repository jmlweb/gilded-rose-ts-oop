import Item from './Item';

class AgedBrieItem extends Item {
  static of(name: string, sellIn: number, quality: number) {
    return new AgedBrieItem(name, sellIn, quality);
  }

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  update() {
    this.decreaseSellIn();
    const qty = this.isPassed() ? 2 : 1;
    this.increaseQuality(qty);
  }
}

export default AgedBrieItem;
