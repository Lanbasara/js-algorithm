const { BST } = require('../../data-structure/bst-and-avl');
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
/**
 *        1
 *      /   \
 *     -1    2
 *     / \   / \
 *   -10       10
 *    / \      / \
 *  -122 -9   5  12
 *                \
 *                122
 */
test('前序遍历', () => {
  expect(bst.prevTraversal(bst.root)).toEqual([1, -1, -10, -122, -9, 2, 10, 5, 12, 122]);
});

test('任意节点的前序遍历', () => {
  expect(bst.prevTraversal(bst.root.left)).toEqual([-1, -10, -122, -9]);
});

test('任意节点的前序遍历2', () => {
  expect(bst.prevTraversal(bst.root.right)).toEqual([2, 10, 5, 12, 122]);
});

test('非递归前序遍历', () => {
  expect(bst.prevTraversal2(bst.root)).toEqual([1, -1, -10, -122, -9, 2, 10, 5, 12, 122]);
});
test('中序遍历', () => {
  expect(bst.midTraversal(bst.root)).toEqual([-122, -10, -9, -1, 1, 2, 5, 10, 12, 122]);
});
test('非递归中序遍历', () => {
  expect(bst.midTraversal2(bst.root)).toEqual([-122, -10, -9, -1, 1, 2, 5, 10, 12, 122]);
});
test('后序遍历', () => {
  expect(bst.postTraversal(bst.root)).toEqual([-122, -9, -10, -1, 5, 122, 12, 10, 2, 1]);
});
test('非递归后序遍历', () => {
  expect(bst.postTraversal2(bst.root)).toEqual([-122, -9, -10, -1, 5, 122, 12, 10, 2, 1]);
});
test('广度遍历', () => {
  expect(bst.breadthTraversal(bst.root)).toEqual([1, -1, 2, -10, 10, -122, -9, 5, 12, 122]);
});
test('任意节点开始的广度遍历', () => {
  expect(bst.breadthTraversal(bst.root.right)).toEqual([2, 10, 5, 12, 122]);
});

test('获取最小值', () => {
  expect(bst.getMin().value).toEqual(-122);
});

test('获取任意节点子树最小值', () => {
  expect(bst.getMin(bst.root.right).value).toEqual(2);
});

test('获取最大值', () => {
  expect(bst.getMax().value).toEqual(122);
});

test('获取任意节点子树的最大值', () => {
  expect(bst.getMax(bst.root.left).value).toEqual(-1);
});

test('向下取整', () => {
  expect(bst.floor(undefined, -122).value).toBe(-122);
  expect(bst.floor(undefined, -8).value).toBe(-9);
  expect(bst.floor(undefined, 6).value).toBe(5);
});

test('向上取整', () => {
  expect(bst.ceil(undefined, -121).value).toBe(-10);
  expect(bst.ceil(undefined, -3).value).toBe(-1);
  expect(bst.ceil(undefined, 6).value).toBe(10);
});
test('排名', () => {
  expect(bst.select(0).value).toBe(-122);
  expect(bst.select(1).value).toBe(-10);
  expect(bst.select(3).value).toBe(-1);
  expect(bst.select(6).value).toBe(5);
  expect(bst.select(5).value).toBe(2);
});

const bst1 = new BST();
bst1.addNode(1);
bst1.addNode(-1);
bst1.addNode(0);
bst1.addNode(2);
bst1.addNode(2);
bst1.addNode(2);
bst1.addNode(10);
bst1.addNode(5);
bst1.addNode(12);
bst1.addNode(122);
bst1.addNode(-10);
bst1.addNode(-122);
bst1.addNode(-9);
test('获取节点', () => {
  expect(bst1.size).toBe(13);
  const targetTwo = bst1.getNode(bst1.root, 2);
  expect(targetTwo.left.value).toBe(2);
  expect(targetTwo.right.value).toBe(10);
  expect(bst1.getNode(bst1.root, 122).value).toBe(122);
});

test('rank', () => {
  expect(bst1.getRank(-122)).toBe(0);
  expect(bst1.getRank(-10)).toBe(1);
  expect(bst1.getRank(-9)).toBe(2);
  expect(bst1.getRank(-1)).toBe(3);
  expect(bst1.getRank(0)).toBe(4);
  expect(bst1.getRank(1)).toBe(5);
  expect(bst1.getRank(2)).toBe(8);
  expect(bst1.getRank(5)).toBe(9);
  expect(bst1.getRank(10)).toBe(10);
  expect(bst1.getRank(12)).toBe(11);
  expect(bst1.getRank(122)).toBe(12);
});

const bst2 = new BST();
bst2.addNode(4);
bst2.addNode(3);
bst2.addNode(5);
bst2.addNode(6);
test('ceil', () => {
  expect(bst2.ceil(undefined, 5).value).toBe(5);
});

test('upperBounder', () => {
  expect(bst2.upperBounder(undefined, 5).value).toBe(6);
});
