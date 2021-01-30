import ItemQuality from './ItemQuality';
import ItemSellIn from './ItemSellIn';

abstract class Item {
  name: string;
  private _sellIn: ItemSellIn;
  private _quality: ItemQuality;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this._sellIn = ItemSellIn.of(sellIn);
    this._quality = ItemQuality.of(quality);
  }

  abstract update(): void;

  get sellIn() {
    return this._sellIn.value;
  }

  get quality() {
    return this._quality.value;
  }

  decreaseSellIn(qty?: number) {
    this._sellIn = this._sellIn.decrease(qty);
  }

  passesInLessThan(days: number) {
    return this._sellIn.isLessThan(days);
  }

  isPassed() {
    return this._sellIn.isLessThan(0);
  }

  increaseQuality(qty: number) {
    this._quality = this._quality.increase(qty);
  }

  decreaseQuality(qty: number) {
    this._quality = this._quality.decrease(qty);
  }

  resetQuality() {
    this._quality = this._quality.reset();
  }
}

export default Item;
