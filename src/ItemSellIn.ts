class ItemSellIn {
  value: number;

  static of(value: number) {
    return new ItemSellIn(value);
  }

  constructor(value: number) {
    this.value = value;
  }

  decrease(qty: number = 1) {
    return ItemSellIn.of(this.value - qty);
  }

  isLessThan(days: number) {
    return this.value < days;
  }
}

export default ItemSellIn;
