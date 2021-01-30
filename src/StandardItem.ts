import Item from './Item';

class StandardItem extends Item {
  static of(name: string, sellIn: number, quality: number) {
    return new StandardItem(name, sellIn, quality);
  }

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  update() {
    this.decreaseSellIn();
    const qty = this.isPassed() ? 2 : 1;
    this.decreaseQuality(qty);
  }
}

export default StandardItem;
