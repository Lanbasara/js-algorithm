const { BIT } = require('../../data-structure/binary-indexed-tree');

describe('BIT test case', () => {
  const tree = new BIT([1, 2, 3, 4]);
  it('prefixSumQuery', () => {
    expect(tree.prefixSumQuery(0)).toBe(1);
    expect(tree.prefixSumQuery(1)).toBe(3);
    expect(tree.prefixSumQuery(2)).toBe(6);
    expect(tree.prefixSumQuery(3)).toBe(10);
  });

  it('sumRange', () => {
    expect(tree.sumRange(0, 0)).toBe(1);
    expect(tree.sumRange(0, 1)).toBe(3);
    expect(tree.sumRange(0, 2)).toBe(6);
    expect(tree.sumRange(0, 3)).toBe(10);
    expect(tree.sumRange(1, 1)).toBe(2);
    expect(tree.sumRange(1, 2)).toBe(5);
    expect(tree.sumRange(1, 3)).toBe(9);
    expect(tree.sumRange(2, 2)).toBe(3);
    expect(tree.sumRange(2, 3)).toBe(7);
    expect(tree.sumRange(3, 3)).toBe(4);
  });
  it('add some val',() => {
    tree.add(0,3)
    expect(tree.prefixSumQuery(0,0)).toBe(4)
    expect(tree.sumRange(0,0)).toBe(4)
    expect(tree.sumRange(0,1)).toBe(6)
    expect(tree.sumRange(0,2)).toBe(9)
    expect(tree.sumRange(0,3)).toBe(13)
  })

  it('update some val',() => {
    const tree = new BIT([1, 2, 3, 4]);
    tree.update(0,3)
    expect(tree.prefixSumQuery(0,0)).toBe(3)
    expect(tree.sumRange(0,0)).toBe(3)
    expect(tree.sumRange(0,1)).toBe(5)
    expect(tree.sumRange(0,2)).toBe(8)
    expect(tree.sumRange(0,3)).toBe(12)
  })
});
