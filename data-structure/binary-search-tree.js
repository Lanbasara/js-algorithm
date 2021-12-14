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
 * 1. 添加节点[x]
 * 2. 遍历节点（3种深度，一种广度）[x]
 * 3. 寻找最大/最小值 [x]
 * 4. 向上/向下取整 [x]
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
  // 递归写法
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
  // 非递归写法
  midTraversal2() {
    function inorderTraversal(node) {
      let white = 0;
      let gray = 1;
      let res = [];
      let stack = [[white, node]];
      while (stack.length) {
        let [color, node] = stack.pop();
        if (!node) continue;
        if (color === white) {
          stack.push([white, node.right]);
          stack.push([gray, node]);
          stack.push([white, node.left]);
        } else {
          res.push(node.value);
        }
      }
      return res;
    }
    return inorderTraversal(this.root);
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
  prevTraversal2() {
    function preOrderTraversal(node) {
      let white = 0;
      let gray = 1;
      let res = [];
      let stack = [[white, node]];
      while (stack.length) {
        let [color, node] = stack.pop();
        if (!node) continue;
        if (color === white) {
          stack.push([white, node.right]);
          stack.push([white, node.left]);
          stack.push([gray, node]);
        } else {
          res.push(node.value);
        }
      }
      return res;
    }
    return preOrderTraversal(this.root);
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
  backTraversal2() {
    function backorderTraversal(node) {
      let white = 0;
      let gray = 1;
      let res = [];
      let stack = [[white, node]];
      while (stack.length) {
        let [color, node] = stack.pop();
        if (!node) continue;
        if (color === white) {
          stack.push([gray, node]);
          stack.push([white, node.right]);
          stack.push([white, node.left]);
        } else {
          res.push(node.value);
        }
      }
      return res;
    }
    return backorderTraversal(this.root);
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
  array2binary(arr) {
    if (!arr || !arr.length) {
      return null;
    }
    let index = 0;
    const queue = [];
    const len = arr.length;
    const head = new Node(arr[index]);
    queue.push(head);

    while (index < len) {
      index++;
      const parent = queue.shift();
      if (arr[index] !== null && arr[index] !== undefined) {
        const node = new Node(arr[index]);
        parent.left = node;
        queue.push(node);
      }

      index++;
      if (arr[index] !== null && arr[index] !== undefined) {
        const node = new Node(arr[index]);
        parent.right = node;
        queue.push(node);
      }
    }
    console.log('head is', head);
    return head;
  }
}

function TreeNode(val, left, right) {
  this.val = val;
  left ? (this.left = left) : (this.left = null);
  right ? (this.right = right) : (this.right = null);
}
function transferArrayToTree(array) {
  if (array.length === 0) return null;
  let root = new TreeNode(array[0]);
  let index = 1;
  let q = [root];
  while (index < array.length) {
    let parent = q.shift();
    if (array[index] !== null) {
      let node = new TreeNode(array[index]);
      parent.left = node;
      q.push(parent.left);
    }
    index++;
    if (array[index] !== null) {
      let node = new TreeNode(array[index]);
      parent.right = node;
      q.push(parent.right);
    }
    index++;
  }
  return root;
}

module.exports = {
  BST,
  transferArrayToTree,
};
