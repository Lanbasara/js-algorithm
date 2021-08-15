const BST = require('../../data-structure/binary-search-tree');
console.log('二分搜索树测试，数据导入');
const bst = new BST();
bst.addNode(1);
bst.addNode(-1);
bst.addNode(2);
bst.addNode(10);
bst.addNode(5);
bst.addNode(-10);
bst.addNode(-9);
bst.addNode(-122);
bst.addNode(12);
bst.addNode(122);
test('前序遍历', () => {
  expect(bst.prevTraversal()).toEqual([1, -1, -10, -122, -9, 2, 10, 5, 12, 122]);
});
test('中序遍历', () => {
  expect(bst.midTraversal()).toEqual([-122, -10, -9, -1, 1, 2, 5, 10, 12, 122]);
});
test('后序遍历', () => {
  expect(bst.backTraversal()).toEqual([-122, -9, -10, -1, 5, 122, 12, 10, 2, 1]);
});
test('广度遍历', () => {
  expect(bst.breadthTraversal()).toEqual([1, -1, 2, -10, 10, -122, -9, 5, 12, 122]);
});
test('寻找最大值', () => {
  expect(bst.getMax().value).toBe(122);
});
test('寻找最小值', () => {
  expect(bst.getMin().value).toBe(-122);
});
test('向下取整', () => {
  expect(bst.floor(-121)).toBe(-122);
  expect(bst.floor(-8)).toBe(-9);
  expect(bst.floor(6)).toBe(5);
});
test('向上取整', () => {
  expect(bst.ceil(-121)).toBe(-10);
  expect(bst.ceil(-3)).toBe(-1);
  expect(bst.ceil(6)).toBe(10);
});
test('排名', () => {
  expect(bst.select(0)).toBe(-122);
  expect(bst.select(1)).toBe(-10);
  expect(bst.select(3)).toBe(-1);
  expect(bst.select(6)).toBe(5);
});

test('删除最大值', () => {
  bst.deleteMax();
  expect(bst.getMax().value).toBe(12);
  bst.deleteMax();
  expect(bst.getMax().value).toBe(10);
});

test('删除最小值', () => {
  bst.deleteMin();
  expect(bst.getMin().value).toBe(-10);
  bst.deleteMin();
  expect(bst.getMin().value).toBe(-9);
});

test('删除任意值', () => {
  bst.deleteNode(2);
  expect(bst.midTraversal()).toEqual([-9, -1, 1, 5, 10]);
  expect(bst.size).toBe(5);
  expect(bst.select(2)).toBe(1);
});
