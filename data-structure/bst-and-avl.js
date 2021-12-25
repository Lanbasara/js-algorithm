/**
 * 2021.12.12
 * 二分搜索树和平衡二叉树复习
 */
class TreeNode {
  constructor(v, left = null, right = null) {
    this.value = v;
    this.left = left;
    this.right = right;
    this.size = 1;
    this.height = 1;
  }
}
class BST {
  /**
   * 初始化对象
   */
  constructor() {
    this.root = null;
    this.size = 0;
  }
  /**
   * 添加节点
   */
  addNode(v) {
    this.root = this._addNode(this.root, v);
  }
  _addNode(node, value) {
    if (!node) {
      this.size++;
      return new TreeNode(value);
    }
    if (node.value >= value) {
      node.size++;
      node.left = this._addNode(node.left, value);
    } else {
      node.size++;
      node.right = this._addNode(node.right, value);
    }
    return node;
  }
  /**
   * 遍历节点
   * 递归写法
   */
  prevTraversal(node) {
    const res = [];
    function _prev(node) {
      if (node) {
        res.push(node.value);
        _prev(node.left);
        _prev(node.right);
      }
    }
    _prev(node);
    return res;
  }
  midTraversal(node) {
    const res = [];
    function _mid(node) {
      if (node) {
        _mid(node.left);
        res.push(node.value);
        _mid(node.right);
      }
    }
    _mid(node);
    return res;
  }
  postTraversal(node) {
    const res = [];
    function _post(node) {
      if (node) {
        _post(node.left);
        _post(node.right);
        res.push(node.value);
      }
    }
    _post(node);
    return res;
  }
  /**
   * 遍历节点
   * 非递归形式
   * 要点:
   * 1. 借助《栈》
   * 2. 双色标记法
   */
  prevTraversal2(node) {
    const res = [];
    let [white, gray] = [0, 1];
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

  midTraversal2(node) {
    const res = [];
    let [white, gray] = [0, 1];
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

  postTraversal2(node) {
    const res = [];
    let [white, gray] = [0, 1];
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
  /**
   * 广度遍历
   * 要点:
   * 1. 借助《队列》
   */
  breadthTraversal(node) {
    const res = [];
    let q = [node];
    while (q.length) {
      let node = q.shift();
      res.push(node.value);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return res;
  }

  /**
   * 寻找最大/最小值
   * 递归向左右子树寻找
   * 出口条件是没有左/右子节点了
   */
  getMin(node = this.root) {
    if (!node.left) return node;
    return this.getMin(node.left);
  }
  getMax(node = this.root) {
    if (!node.right) return node;
    return this.getMax(node.right);
  }

  /**
   * 向上,向下取整
   * 要点:
   * 1. 画图
   */
  floor(node = this.root, value) {
    if (!node) return null;
    if (node.value === value) {
      return node;
    }
    if (node.value > value) {
      return this.floor(node.left, value);
    }
    let right = this.floor(node.right, value);
    if (right) return right;
    return node;
  }
  ceil(node = this.root, value) {
    if (!node) return null;
    if (node.value === value) return node;
    if (node.value < value) {
      return this.ceil(node.right, value);
    }
    let left = this.ceil(node.left, value);
    if (left) return left;
    return node;
  }
  upperBounder(node = this.root, value) {
    if (!node) return null;
    if (node.value <= value) {
      return this.upperBounder(node.right, value);
    }
    let left = this.upperBounder(node.left, value);
    if (left) return left;
    return node;
  }

  /**
   * 获取节点Size
   * @param {*} node
   * @returns
   */

  _getSize(node) {
    return node ? node.size : 0;
  }
  _select(node, size) {
    if (!node) return null;
    let sizeOnLeft = this._getSize(node.left);
    if (sizeOnLeft > size) {
      return this._select(node.left, size);
    } else if (sizeOnLeft < size) {
      return this._select(node.right, size - 1 - sizeOnLeft);
    }
    return node;
  }
  /**
   * 获取排名第n的节点
   * @param  size
   * @return TreeNode
   */
  select(size) {
    return this._select(this.root, size) ? this._select(this.root, size) : null;
  }

  /**
   * 获取输入节点在整棵树中的最大rank
   * @param : node.value
   * @return : rank
   * 参考: https://stackoverflow.com/questions/26080924/computing-rank-of-a-node-in-a-binary-search-tree
   */
  getRank(value) {
    let rank = 0;
    let node = this.root;
    while (node) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        let leftSize = node.left ? node.left.size : 0;
        rank += 1 + leftSize;
        node = node.right;
      } else {
        let leftSize = node.left ? node.left.size : 0;
        return rank + leftSize;
      }
    }
    return -1;
  }

  /**
   * 获取节点(因为添加的时候是按照小于等于添加到左子树, 所以相同的value, 获取到中序遍历中最大的节点)
   */
  getNode(node = this.root, value) {
    if (!node) return null;
    if (node.value === value) {
      return node;
    } else if (node.value > value) {
      return this.getNode(node.left, value);
    } else {
      return this.getNode(node.right, value);
    }
  }

  /**
   * 删除最大/最小值
   */
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
    node.size = 1 + this._getSize(node.left) + this._getSize(node.right);
    return node;
  }

  /**
   * 删除任意节点
   */
  deleteNode(value) {
    this.root = this._deleteNode(this.root, value);
    this.size--;
  }

  _deleteNode(node, value) {
    if (!node) return null;
    if (node.value > value) {
      node.left = this._deleteNode(node.left, value);
    } else if (node.value < value) {
      node.right = this._deleteNode(node.right, value);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let min = this.getMin(node.right);
      min.right = this._deleteMin(node.right);
      min.left = node.left;
      node = min;
    }
    node.size = 1 + this._getSize(node.left) + this._getSize(node.right);
    return node;
  }
}

/**
 * 平衡二叉树
 */
class AVL {
  /**
   * 初始化对象
   */
  constructor() {
    this.root = null;
    this.size = 0;
  }
  _getHeight(node) {
    return node ? node.height : 0;
  }
  _getBalanceFactor(node) {
    return this._getHeight(node.left) - this._getHeight(node.right);
  }
  /**
   * 添加节点
   */
  addNode(v) {
    this.root = this._addNode(this.root, v);
  }
  _addNode(node, value) {
    if (!node) {
      this.size++;
      return new TreeNode(value);
    }
    if (node.value >= value) {
      node.size++;
      node.left = this._addNode(node.left, value);
    } else if (node.value < value) {
      node.size++;
      node.right = this._addNode(node.right, value);
    }
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    node.size = 1 + this._getSize(node.left) + this._getSize(node.right);
    // 计算倾斜因子
    let factor = this._getBalanceFactor(node);
    // 判断倾斜结构
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
      node.right = this._rightRotate(node.right);
      return this._leftRotate(node);
    }
    return node;
  }

  /**
   * 右旋
   */
  _rightRotate(node) {
    let newRoot = node.left;
    let moveNode = newRoot.right;
    newRoot.right = node;
    node.left = moveNode;
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    node.size = 1 + this._getSize(node.left) + this._getSize(node.right);
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
    newRoot.size = 1 + this._getSize(newRoot.left) + this._getSize(newRoot.right);
    return newRoot;
  }

  /**
   * 左旋
   */
  _leftRotate(node) {
    let newRoot = node.right;
    let moveNode = newRoot.left;
    newRoot.left = node;
    node.right = moveNode;
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    node.size = 1 + this._getSize(node.left) + this._getSize(node.right);
    newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
    newRoot.size = 1 + this._getSize(newRoot.left) + this._getSize(newRoot.right);
    return newRoot;
  }

  /**
   * 遍历节点
   * 递归写法
   */
  prevTraversal(node) {
    const res = [];
    function _prev(node) {
      if (node) {
        res.push(node.value);
        _prev(node.left);
        _prev(node.right);
      }
    }
    _prev(node);
    return res;
  }
  midTraversal(node) {
    const res = [];
    function _mid(node) {
      if (node) {
        _mid(node.left);
        res.push(node.value);
        _mid(node.right);
      }
    }
    _mid(node);
    return res;
  }
  postTraversal(node) {
    const res = [];
    function _post(node) {
      if (node) {
        _post(node.left);
        _post(node.right);
        res.push(node.value);
      }
    }
    _post(node);
    return res;
  }
  /**
   * 遍历节点
   * 非递归形式
   * 要点:
   * 1. 借助《栈》
   * 2. 双色标记法
   */
  prevTraversal2(node) {
    const res = [];
    let [white, gray] = [0, 1];
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

  midTraversal2(node) {
    const res = [];
    let [white, gray] = [0, 1];
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

  postTraversal2(node) {
    const res = [];
    let [white, gray] = [0, 1];
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
  /**
   * 广度遍历
   * 要点:
   * 1. 借助《队列》
   */
  breadthTraversal(node) {
    const res = [];
    let q = [node];
    while (q.length) {
      let node = q.shift();
      res.push(node.value);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return res;
  }

  /**
   * 寻找最大/最小值
   * 递归向左右子树寻找
   * 出口条件是没有左/右子节点了
   */
  getMin(node = this.root) {
    if (!node.left) return node;
    return this.getMin(node.left);
  }
  getMax(node = this.root) {
    if (!node.right) return node;
    return this.getMax(node.right);
  }

  /**
   * 向上,向下取整
   * 要点:
   * 1. 画图
   */
  floor(node = this.root, value) {
    if (!node) return null;
    if (node.value === value) {
      return node;
    }
    if (node.value > value) {
      return this.floor(node.left, value);
    }
    let right = this.floor(node.right, value);
    if (right) return right;
    return node;
  }
  ceil(node = this.root, value) {
    if (!node) return null;
    if (node.value === value) return node;
    if (node.value < value) {
      return this.ceil(node.right, value);
    }
    let left = this.ceil(node.left, value);
    if (left) return left;
    return node;
  }
  upperBounder(node = this.root, value) {
    if (!node) return null;
    if (node.value <= value) {
      return this.upperBounder(node.right, value);
    }
    let left = this.upperBounder(node.left, value);
    if (left) return left;
    return node;
  }

  /**
   * 获取节点Size
   * @param {*} node
   * @returns
   */

  _getSize(node) {
    return node ? node.size : 0;
  }
  _select(node, size) {
    if (!node) return null;
    let sizeOnLeft = this._getSize(node.left);
    if (sizeOnLeft > size) {
      return this._select(node.left, size);
    } else if (sizeOnLeft < size) {
      return this._select(node.right, size - 1 - sizeOnLeft);
    }
    return node;
  }
  /**
   * 获取排名第n的节点
   * @param  size
   * @return TreeNode
   */
  select(size) {
    return this._select(this.root, size) ? this._select(this.root, size) : null;
  }

  /**
   * 获取输入节点在整棵树中的最大rank
   * @param : node.value
   * @return : rank
   * 参考: https://stackoverflow.com/questions/26080924/computing-rank-of-a-node-in-a-binary-search-tree
   */
  getRank(value) {
    let rank = 0;
    let node = this.root;
    while (node) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        let leftSize = node.left ? node.left.size : 0;
        rank += 1 + leftSize;
        node = node.right;
      } else {
        let leftSize = node.left ? node.left.size : 0;
        rank += leftSize;
        break;
      }
    }
    return rank;
  }
  lessThan(value) {
    var node = this.root;
    let count = 0;
    while (node) {
      if (value > node.value) {
        count += this._getSize(node) - this._getSize(node.right);
        node = node.right;
      } else if (value <= node.value) {
        node = node.left;
      } else {
        count += this._getSize(node.left);
        break;
      }
    }
    return count;
  }

  moreThan(value) {
    let node = this.root;
    let count = 0;
    while (node) {
      if (value < node.value) {
        count += this._getSize(node) - this._getSize(node.left);
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        count += this._getSize(node.right);
        break;
      }
    }
    return count;
  }

  /**
   * 获取节点(因为添加的时候是按照小于等于添加到左子树, 所以相同的value, 获取到中序遍历中最大的节点)
   */
  getNode(node = this.root, value) {
    if (!node) return null;
    if (node.value === value) {
      return node;
    } else if (node.value > value) {
      return this.getNode(node.left, value);
    } else {
      return this.getNode(node.right, value);
    }
  }

  /**
   * 删除最大/最小值
   */
  deleteMin() {
    this.root = this._deleteMin(this.root);
    this.size--;
  }
  _deleteMin(node) {
    if (node && !node.left) return node.right;
    node.left = this._deleteMin(node.left);
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    node.size = 1 + this._getSize(node.left) + this._getSize(node.right);
    // 计算倾斜因子
    let factor = this._getBalanceFactor(node);
    // 判断倾斜结构
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
      node.right = this._rightRotate(node.right);
      return this._leftRotate(node);
    }
    return node;
  }

  deleteMax() {
    this.root = this._deleteMax(this.root);
    this.size--;
  }
  _deleteMax(node) {
    if (node && !node.right) return node.left;
    node.right = this._deleteMax(node.right);
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    node.size = 1 + this._getSize(node.left) + this._getSize(node.right);
    // 计算倾斜因子
    let factor = this._getBalanceFactor(node);
    // 判断倾斜结构
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
      node.right = this._rightRotate(node.right);
      return this._leftRotate(node);
    }
    return node;
  }

  /**
   * 删除任意节点
   */
  deleteNode(value) {
    this.root = this._deleteNode(this.root, value);
    this.size--;
  }

  _deleteNode(node, value) {
    if (!node) return null;
    if (node.value > value) {
      node.left = this._deleteNode(node.left, value);
    } else if (node.value < value) {
      node.right = this._deleteNode(node.right, value);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let min = this.getMin(node.right);
      min.right = this._deleteMin(node.right);
      min.left = node.left;
      node = min;
    }
    node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    node.size = 1 + this._getSize(node.left) + this._getSize(node.right);
    // 计算倾斜因子
    let factor = this._getBalanceFactor(node);
    // 判断倾斜结构
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
      node.right = this._rightRotate(node.right);
      return this._leftRotate(node);
    }
    return node;
  }
}

var AVLTree = (function () {
  function Node(element) {
    this.element = element;
    this.height = 0;
    this.size = 1;
    this.left = null;
    this.right = null;
  }

  function height(node) {
    return node ? node.height : -1;
  }
  function size(node) {
    return node ? node.size : 0;
  }
  function rotateLeft(node) {
    var left = node.left;
    if (height(left.left) < height(left.right)) {
      left.height--;
      left.right.height++;
      left.size = size(left) - size(left.right) + size(left.right.left);
      left.right.size = size(left.right) - size(left.right.left) + size(left);
      node.left = left.right;
      left.right = node.left.left;
      node.left.left = left;
      left = node.left;
    }
    node.height--;
    node.size = size(node) - size(left) + size(left.right);
    node.left = left.right;
    left.size = size(left) - size(left.right) + size(node);
    left.right = node;
    return left;
  }
  function rotateRight(node) {
    var right = node.right;
    if (height(right.right) < height(right.left)) {
      right.height--;
      right.left.height++;
      right.size = size(right) - size(right.left) + size(right.left.right);
      right.left.size = size(right.left) - size(right.left.right) + size(right);
      node.right = right.left;
      right.left = node.right.right;
      node.right.right = right;
      right = node.right;
    }
    node.height--;
    node.size = size(node) - size(right) + size(right.left);
    node.right = right.left;
    right.size = size(right) - size(right.left) + size(node);
    right.left = node;
    return right;
  }

  function insert(node, element) {
    var elem = node.element;
    node.size++;
    if (element < elem) {
      if (node.left) {
        node.left = insert(node.left, element);
        if (height(node.left) - height(node.right) === 2) {
          node = rotateLeft(node);
        } else if (node.left.height === node.height) {
          node.height++;
        }
      } else {
        node.left = new Node(element);
        if (!node.right) {
          node.height++;
        }
      }
    } else if (element > elem) {
      if (node.right) {
        node.right = insert(node.right, element);
        if (height(node.right) - height(node.left) === 2) {
          node = rotateRight(node);
        } else if (node.right.height === node.height) {
          node.height++;
        }
      } else {
        node.right = new Node(element);
        if (!node.left) {
          node.height++;
        }
      }
    }
    return node;
  }

  function AVLTree() {
    this.top = null;
  }

  AVLTree.prototype = {
    insert: function (element) {
      if (this.top) {
        this.top = insert(this.top, element);
      } else {
        this.top = new Node(element);
      }
    },
    lessThan(value) {
      var node = this.top,
        count = 0;
      while (node) {
        if (value > node.element) {
          count += size(node) - size(node.right);
          node = node.right;
        } else if (value < node.element) {
          node = node.left;
        } else {
          count += size(node.left);
          break;
        }
      }
      return count;
    },
    moreThan(value) {
      var node = this.top,
        count = 0;
      while (node) {
        if (value < node.element) {
          count += size(node) - size(node.left);
          node = node.left;
        } else if (value > node.element) {
          node = node.right;
        } else {
          count += size(node.right);
          break;
        }
      }
      return count;
    },
  };

  return AVLTree;
})();

module.exports = {
  BST,
  AVL,
  AVLTree,
};
