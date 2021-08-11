/**
 * 二叉树
 * 基础概念
 * 1. 节点的度: 节点具有的子节点的个数
 * 2. 可以证明，任何比的树都可以转化为二叉树
 * 3. 二叉树，最大的度是2的树
 * 4. 节点的深度：从根节点到该节点的最短路径上的节点数
 * 5. 节点的高度: 从该节点到叶子结点的路径上的节点数
 */
/**
 * 二分搜索树
 * 特点
 * 1. 对于每个节点，左子树的每个节点的值都小于该节点都小于右子树的每个节点的值
 * 即，对于任何一个节点 左 < self < 右
 *
 * 要点
 * 1. 添加节点的递归操作，不断根据情况更新左右子树
 * 2. 遍历，按照顺序进行递归操作
 * 3. 深度遍历：按照既定顺序递归左右子树
 * 4. 广度遍历：需要借助队列，不断将左右子树节点入队
 * 5. 寻找最大最小值： 递归寻找左 / 右 子树
 * 6. 寻找排名为n的值：需要给每个节点添加一个size属性，记录自己+子节点个数。通过size先对比左子树的个数，再对比右子树的个数
 */
const { MyQueue } = require('./queue');

class Node {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
    this.size = 1;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  // 要点1
  _addNode(node, v) {
    if (!node) {
      this.size++;
      return new Node(v);
    }
    if (node.value > v) {
      node.size++;
      node.left = this._addNode(node.left, v);
    } else if (node.value <= v) {
      node.size++;
      node.right = this._addNode(node.right, v);
    }
    return node;
  }
  _getSize(node) {
    return node ? node.size : 0;
  }

  selectNode(index) {
    function _select(node, index) {
      if (!node) return;
      let sizeOnLeft = node.left ? node.left.size : 0;
      if (sizeOnLeft > index) {
        return _select(node.left, index);
      }
      if (sizeOnLeft < index) {
        return _select(node.right, index - sizeOnLeft - 1);
      }
      return node;
    }
    return _select(this.root, index) ? _select(this.root, index).value : null;
  }

  addNode(v) {
    this.root = this._addNode(this.root, v);
  }
  preTraversal() {
    const res = [];
    function _pre(node) {
      if (node) {
        res.push(node.value);
        _pre(node.left);
        _pre(node.right);
      }
    }
    _pre(this.root);
    return res;
  }

  midTraversal() {
    const res = [];
    function _mid(node) {
      if (node) {
        _mid(node.left);
        res.push(node.value);
        _mid(node.right);
      }
    }
    _mid(this.root);
    return res;
  }

  backTraserval() {
    const res = [];
    function _back(node) {
      if (node) {
        _back(node.right);
        _back(node.left);
        res.push(node.value);
      }
    }
    _back(this.root);
    return res;
  }
  getMin() {
    function _getmin(node) {
      if (!node.left) return node;
      return _getmin(node.left);
    }
    return _getmin(this.root).value;
  }
  getMax() {
    function _getmax(node) {
      if (!node.right) return node;
      return _getmax(node.right);
    }
    return _getmax(this.root).value;
  }
  breadthTraserval() {
    const res = [];
    if (!this.root) return null;
    const q = new MyQueue();
    q.enQueue(this.root);
    while (q.getLength()) {
      let n = q.deQueue();
      res.push(n.value);
      if (n.left) q.enQueue(n.left);
      if (n.right) q.enQueue(n.right);
    }
    return res;
  }
  floor(v) {
    function _floor(node, v) {
      if (!node) return null;
      if (node.value === v) return node;
      if (node.value > v) {
        return _floor(node.left, v);
      }
      let right = _floor(node.right, v);
      if (right) return right;

      return node;
    }
    return _floor(this.root, v) ? _floor(this.root, v).value : null;
  }
  ceil(v) {
    function _ceil(node, v) {
      if (!node) return null;
      if (node.value === v) {
        return node;
      }
      if (node.value < v) {
        return _ceil(node.right, v);
      }
      let left = _ceil(node.left, v);
      if (left) return left;
      return node;
    }
    return _ceil(this.root, v) ? _ceil(this.root, v).value : null;
  }
}

module.exports = BST;
