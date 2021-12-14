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
   * 获取节点
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
}

module.exports = {
  BST,
};