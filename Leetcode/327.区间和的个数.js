var countRangeSum = function(nums, lower, upper) {
  var sum = 0, less, more, count = 0;
  var tree = new AVL();
  for (var i = 0; i < nums.length; i++) {
    tree.addNode(sum);
    sum += nums[i];
    less = tree.lessThan(sum - upper);
    more = tree.moreThan(sum - lower);
    count += i + 1 - less - more;
  }
  return count;
};
class TreeNode {
  constructor(v, left = null, right = null) {
    this.value = v;
    this.left = left;
    this.right = right;
    this.size = 1;
    this.height = 1;
  }
}
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
    } else if(node.value < value) {
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
   * 获取节点Size
   * @param {*} node
   * @returns
   */

  _getSize(node) {
    return node ? node.size : 0;
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


}

//-------------------------------------------------

// var countRangeSum = function(nums, lower, upper) {
//   var sum = 0, less, more, count = 0;
//   var tree = new AVLTree();
//   for (var i = 0; i < nums.length; i++) {
//     tree.insert(sum);
//     sum += nums[i];
//     less = tree.lessThan(sum - upper);
//     more = tree.moreThan(sum - lower);
//     count += i + 1 - less - more;
//   }
//   debugger
//   return count;
// };

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
      var node = this.top, count = 0;
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
      var node = this.top, count = 0;
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


// const nums = [0,-1,-2,-3,0,2], lower = 3, upper = 5
// const nums = [0,0], lower = 0, upper = 0
// const nums = [0,0,-3,2,-2,-2], lower = -3, upper = 1
console.log(countRangeSum(nums,lower,upper))