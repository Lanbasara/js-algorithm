const { SegmentTree } = require('../../data-structure/segment-tree');

describe('Segment-tree test', () => {
  it('1. Build tree', () => {
    const tree = new SegmentTree([10, 11, 12, 13, 14]);
    expect(tree.tree).toEqual([60, 33, 27, 21, 12, 13, 14, 10, 11]);
  });

  it('2. getSum', () => {
    const tree = new SegmentTree([10, 11, 12, 13, 14]);
    expect(tree.tree).toEqual([60, 33, 27, 21, 12, 13, 14, 10, 11]);
    expect(tree.getSum(2, 4)).toBe(39);
    expect(tree.getSum(0, 0)).toBe(10);
    expect(tree.getSum(0, 1)).toBe(21);
    expect(tree.getSum(0, 2)).toBe(33);
    expect(tree.getSum(0, 4)).toBe(60);
    expect(tree.getSum(1, 1)).toBe(11);
    expect(tree.getSum(2, 2)).toBe(12);
    expect(tree.getSum(1, 2)).toBe(23);
    expect(tree.getSum(3, 3)).toBe(13);
    expect(tree.getSum(4, 4)).toBe(14);
  });
});
