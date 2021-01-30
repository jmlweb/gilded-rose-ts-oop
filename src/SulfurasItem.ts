import Item from './Item';

class SulfurasItem extends Item {
  static of(name: string, sellIn: number, quality: number) {
    return new SulfurasItem(name, sellIn, quality);
  }

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  update() {}
}

export default SulfurasItem;
