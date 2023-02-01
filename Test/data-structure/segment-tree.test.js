const { SegmentTree } = require('../../data-structure/segment-tree');

describe('Segment-tree test', () => {
  it('1. Build tree', () => {
    const tree = new SegmentTree([10, 11, 12, 13, 14]);
    expect(tree.tree).toEqual([60, 33, 27, 21, 12, 13, 14, 10, 11]);
  });

  it('2. sumRange', () => {
    const tree = new SegmentTree([10, 11, 12, 13, 14]);
    expect(tree.sumRange(2, 4)).toBe(39);
    expect(tree.sumRange(0, 0)).toBe(10);
    expect(tree.sumRange(0, 1)).toBe(21);
    expect(tree.sumRange(0, 2)).toBe(33);
    expect(tree.sumRange(0, 4)).toBe(60);
    expect(tree.sumRange(1, 1)).toBe(11);
    expect(tree.sumRange(2, 2)).toBe(12);
    expect(tree.sumRange(1, 2)).toBe(23);
    expect(tree.sumRange(3, 3)).toBe(13);
    expect(tree.sumRange(4, 4)).toBe(14);
  });

  it('2. sumRange after update', () => {
    const tree = new SegmentTree([10, 11, 12, 13, 14]);
    tree.update(0,12)
    expect(tree.sumRange(2, 4)).toBe(39);
    expect(tree.sumRange(0, 0)).toBe(12);
    expect(tree.sumRange(0, 1)).toBe(23);
    expect(tree.sumRange(0, 2)).toBe(35);
    expect(tree.sumRange(0, 4)).toBe(62);
    expect(tree.sumRange(1, 1)).toBe(11);
    expect(tree.sumRange(2, 2)).toBe(12);
    expect(tree.sumRange(1, 2)).toBe(23);
    expect(tree.sumRange(3, 3)).toBe(13);
    expect(tree.sumRange(4, 4)).toBe(14);
  });
});
