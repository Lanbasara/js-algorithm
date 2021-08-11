const BST = require('../../data-structure/binary-search-tree');
test('二分搜索树测试', () => {
  const bst = new BST();
  bst.addNode(1);
  bst.addNode(-1);
  bst.addNode(2);
  bst.addNode(10);
  bst.addNode(-10);
  bst.addNode(-10);
  bst.addNode(-122);
  bst.addNode(12);
  bst.addNode(122);

  expect(bst.midTraversal()).toEqual([-122, -10, -10, -1, 1, 2, 10, 12, 122]);
  expect(bst.breadthTraserval()).toEqual([1, -1, 2, -10, 10, -122, -10, 12, 122]);
  expect(bst.getMin()).toBe(-122);
  expect(bst.getMax()).toBe(122);
  expect(bst.floor(-123)).toBe(null);
  expect(bst.ceil(-123)).toBe(-122);
  expect(bst.selectNode(0)).toBe(-122);
});
