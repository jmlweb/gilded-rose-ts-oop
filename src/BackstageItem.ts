import Item from './Item';

class BackstageItem extends Item {
  private static TRIPLE_QUALITY_THRESHOLD = 5;
  private static DOUBLE_QUALITY_THRESHOLD = 10;

  static of(name: string, sellIn: number, quality: number) {
    return new BackstageItem(name, sellIn, quality);
  }

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  update() {
    this.decreaseSellIn();
    if (this.isPassed()) {
      this.resetQuality();
    } else {
      this.increaseQuality(this.calculateQty());
    }
  }

  private calculateQty() {
    if (this.passesInLessThan(BackstageItem.TRIPLE_QUALITY_THRESHOLD)) {
      return 3;
    }
    if (this.passesInLessThan(BackstageItem.DOUBLE_QUALITY_THRESHOLD)) {
      return 2;
    }
    return 1;
  }
}

export default BackstageItem;
