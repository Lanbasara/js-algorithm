/**
 * 平衡二叉树
 * 当BST在极端情况下，会退化为数组，搜索复杂度上升为O(n)
 * 特点
 * 1. 具有二叉搜索树的特点
 * 2. 任意子节点的左右子树的高度差不大于1
 * 3. 基于2，搜索的复杂度稳定在O(logn)。
 *
 * 基于BST的逻辑改造，要点在于在节点变动的时候，动态旋转。
 * 旋转可分为2种情况，左旋和右旋
 * 结构可分为4种情况: LL RR LR RL
 * 上述四种结构，指的是不平衡的节点所在的位置
 */
class Node {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
class AVL {
  constructor() {
    this.root = null;
  }
  addNode(v) {
    this.root = this._addNode(this.root, v);
  }
  _addNode(node, v) {
    if (!node) {
      return new Node(v);
    }
    if (node.value > v) {
      node.left = this._addNode(node.left, v);
    } else if (node.value <= v) {
      node.right = this._addNode(node.right, v);
    }
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    let factor = this._getBalanceFactor(node);
    // 左左
    if (factor > 1 && this._getBalanceFactor(node.left) >= 0) {
      return this._rightRotate(node);
    }
    // 右右
    if (factor < -1 && this._getBalanceFactor(node.right) <= 0) {
      return this._leftRotate(node);
    }
    // 左右
    if (factor > 1 && this._getBalanceFactor(node.left) < 0) {
      node.left = this._leftRotate(node.left);
      return this._rightRotate(node);
    }
    // 右左
    if (factor < -1 && this._getBalanceFactor(node.right) > 0) {
      node.right = this._leftRotate(node.right);
      return this._leftRotate(node);
    }
    return node;
  }
  _getHeight(node) {
    if (!node) return 0;
    return node.height;
  }
  _getBalanceFactor(node) {
    return this._getHeight(node.left) - this._getHeight(node.right);
  }
  _rightRotate(node) {
    let newRoot = node.left;
    let moveNode = newRoot.right;
    newRoot.right = node;
    node.left = moveNode;
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
    return newRoot;
  }
  _leftRotate(node) {
    let newRoot = node.right;
    let moveNode = newRoot.left;
    newRoot.left = node;
    node.right = moveNode;
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
    return newRoot;
  }
}
const avl = new AVL();
/**
 *             5
 *           /   \
 *          2     6
 *         / \
 *        1   3
 *.      /
        0
 */
avl.addNode(5);
avl.addNode(2);
avl.addNode(6);
avl.addNode(1);
avl.addNode(3);
avl.addNode(0);
debugger;
module.exports = AVL;
