import { expect } from "chai";
import ItemFactory from '../src/ItemFactory';
import GildedRose from "../src/GildedRose";
import ITEM_NAMES from '../src/itemNames';

describe("Simple tests", function () {
  it("should decrease sellIn and quality at the end of the day", function () {
    const gildedRose = new GildedRose([ItemFactory.of("foo", 5, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(2);
  });

  it("Once the sell by date has passed, Quality degrades twice as fast", () => {
    const gildedRose = new GildedRose([ItemFactory.of("foo", 0, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(4);
  });

  it("The Quality of an item is never negative", () => {
    const gildedRose = new GildedRose([ItemFactory.of("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it('"Aged Brie" actually increases in Quality the older it gets', () => {
    const gildedRose = new GildedRose([ItemFactory.of(ITEM_NAMES.agedBrie, 1, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(4);
  });

  it('"Aged Brie" actually increases in Quality twice as fast once the sell by date has passed', () => {
    const gildedRose = new GildedRose([ItemFactory.of(ITEM_NAMES.agedBrie, 0, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(5);
  });

  it("The Quality of an item is never more than 50", () => {
    const gildedRose = new GildedRose([ItemFactory.of(ITEM_NAMES.agedBrie, 5, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it('"Sulfuras", being a legendary item, never has to be sold or decreases in Quality', () => {
    const gildedRose = new GildedRose([
      ItemFactory.of(ITEM_NAMES.sulfuras, 5, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(5);
    expect(items[0].quality).to.equal(10);
  });

  it('"Backstage passes" quality increases by 1 when there are more than 10 days', () => {
    const gildedRose = new GildedRose([
      ItemFactory.of(ITEM_NAMES.backstage, 15, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(11);
  });
  it('"Backstage passes" quality increases by 2 when there are 10 days or less', () => {
    const gildedRose = new GildedRose([
      ItemFactory.of(ITEM_NAMES.backstage, 10, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(12);
  });
  it('"Backstage passes" quality increases by 3 when there are 5 days or less', () => {
    const gildedRose = new GildedRose([
      ItemFactory.of(ITEM_NAMES.backstage, 5, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(13);
  });
  it('"Backstage passes" quality drops to 0 after the concert', () => {
    const gildedRose = new GildedRose([
      ItemFactory.of(ITEM_NAMES.backstage, 0, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
  it('"Conjured" items degrade in Quality twice as fast as normal items', () => {
    const gildedRose = new GildedRose([
      ItemFactory.of(ITEM_NAMES.conjured, 4, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  });
});
