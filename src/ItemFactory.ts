import AgedBrieItem from "./AgedBrieItem";
import BackstageItem from "./BackstageItem";
import ConjuredItem from "./ConjuredItem";
import ITEM_NAMES from "./itemNames";
import StandardItem from "./StandardItem";
import SulfurasItem from "./SulfurasItem";

class ItemFactory {
  static of(name: string, sellIn: number, quality: number) {
    if (name === ITEM_NAMES.agedBrie) {
      return AgedBrieItem.of(name, sellIn, quality);
    }
    if (name === ITEM_NAMES.backstage) {
      return BackstageItem.of(name, sellIn, quality);
    }
    if (name === ITEM_NAMES.conjured) {
      return ConjuredItem.of(name, sellIn, quality);
    }
    if (name === ITEM_NAMES.sulfuras) {
      return SulfurasItem.of(name, sellIn, quality);
    }
    return StandardItem.of(name, sellIn, quality);
  }
}

export default ItemFactory;
