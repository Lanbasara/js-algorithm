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
 */

/**
 * 核心操作
 * 1. 添加节点
 * 2. 遍历节点（3种深度，一种广度）
 * 3. 寻找最大/最小值
 * 4. 向上/向下取整
 * 5. 取得排名值
 * 6. 删除最大/最小节点
 * 7. 删除任意节点
 */
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
  addNode(item) {
    this.root = this._addNode(this.root, item);
  }
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
  midTraversal() {
    const res = [];
    function _midTraversal(node) {
      if (node) {
        _midTraversal(node.left);
        res.push(node.value);
        _midTraversal(node.right);
      }
    }
    _midTraversal(this.root);
    return res;
  }
  prevTraversal() {
    const res = [];
    function _prevTraversal(node) {
      if (node) {
        res.push(node.value);
        _prevTraversal(node.left);
        _prevTraversal(node.right);
      }
    }
    _prevTraversal(this.root);
    return res;
  }
  backTraversal() {
    const res = [];
    function _backTraversal(node) {
      if (node) {
        _backTraversal(node.left);
        _backTraversal(node.right);
        res.push(node.value);
      }
    }
    _backTraversal(this.root);
    return res;
  }
  breadthTraversal() {
    if (!this.root) return null;
    let q = [];
    let res = [];
    q.push(this.root);
    while (q.length) {
      let node = q.shift();
      res.push(node.value);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return res;
  }
  getMin() {
    return this._getMin(this.root);
  }
  _getMin(node) {
    if (!node.left) return node;
    return this._getMin(node.left);
  }
  getMax() {
    return this._getMax(this.root);
  }
  _getMax(node) {
    if (!node.right) return node;
    return this._getMax(node.right);
  }
  floor(item) {
    return this._floor(this.root, item) ? this._floor(this.root, item).value : null;
  }
  _floor(node, v) {
    if (!node) return null;
    if (node.value === v) return node;
    if (node.value > v) {
      return this._floor(node.left, v);
    }
    let right = this._floor(node.right, v);
    if (right) return right;
    return node;
  }
  ceil(item) {
    return this._ceil(this.root, item) ? this._ceil(this.root, item).value : null;
  }
  _ceil(node, v) {
    if (!node) return null;
    if (node.value === v) return node;
    if (node.value < v) {
      return this._ceil(node.right, v);
    }
    let left = this._ceil(node.left, v);
    if (left) return left;
    return node;
  }
  _getSize(node) {
    return node ? node.size : 0;
  }
  select(item) {
    return this._select(this.root, item) ? this._select(this.root, item).value : null;
  }
  _select(node, index) {
    if (!node) return null;
    let sizeOnLeft = this._getSize(node.left);
    if (sizeOnLeft > index) {
      return this._select(node.left, index);
    }
    if (sizeOnLeft < index) {
      return this._select(node.right, index - 1 - sizeOnLeft);
    }
    return node;
  }
  deleteMin() {
    this.root = this._deleteMin(this.root);
    this.size--;
  }
  _deleteMin(node) {
    if (node && !node.left) return node.right;
    node.left = this._deleteMin(node.left);
    node.size = this._getSize(node.left) + this._getSize(node.right) + 1;
    return node;
  }
  deleteMax() {
    this.root = this._deleteMax(this.root);
    this.size--;
  }
  _deleteMax(node) {
    if (node && !node.right) return node.left;
    node.right = this._deleteMax(node.right);
    node.size = this._getSize(node.left) + this._getSize(node.right) + 1;
    return node;
  }
  deleteNode(item) {
    this.root = this._deleteNode(this.root, item);
    this.size--;
  }
  _deleteNode(node, value) {
    if (!node) return null;
    if (node.value < value) {
      node.right = this._deleteNode(node.right, value);
    } else if (node.value > value) {
      node.left = this._deleteNode(node.left, value);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let min = this._getMin(node.right);
      min.right = this._deleteMin(node.right);
      min.left = node.left;
      node = min;
    }
    node.size = this._getSize(node.left) + this._getSize(node.right) + 1;
    return node;
  }
  // 作为普通二叉树的层序插入
  addNodeTra(value) {
    this.root = this._addNodeTra(this.root, value);
  }
  _addNodeTra(node, value) {
    
  }
}

module.exports = BST;
