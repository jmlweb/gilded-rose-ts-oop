class ItemQuality {
  private static MIN_VALUE = 0;
  private static MAX_VALUE = 50;
  value: number;

  static of (value: number) {
    return new ItemQuality(value);
  }

  constructor(value: number) {
    this.value = value;
  }

  private safeUpdate(value: number) {
    const safeValue = Math.max(Math.min(value, ItemQuality.MAX_VALUE), ItemQuality.MIN_VALUE);
    return ItemQuality.of(safeValue);
  }

  increase(qty: number) {
    return this.safeUpdate(this.value + qty);
  }

  decrease(qty: number = 1) {
    return this.safeUpdate(this.value - qty);
  }

  reset() {
    return ItemQuality.of(ItemQuality.MIN_VALUE);
  }
}

export default ItemQuality;
