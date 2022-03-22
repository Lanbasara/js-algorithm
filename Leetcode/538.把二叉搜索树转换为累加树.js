/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  function midTraversal(node) {
    let res = [];
    function _mid(node) {
      if (node) {
        _mid(node.left);
        res.push(node.val);
        _mid(node.right);
      }
    }
    _mid(node);
    return res;
  }
  let temp = midTraversal(root);
  let res = new Array(temp.length).fill(0);
  let sum = 0;
  for (let i = temp.length - 1; i >= 0; i--) {
    sum += temp[i];
    res[i] = sum;
  }
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    node.val = res.shift();
    inorder(node.right);
  }
  inorder(root);
  return root;
};
const root = {
  val: 4,
  left: {
    val: 1,
    left: {
      val: 0,
    },
    right: {
      val: 2,
      right: {
        val: 3,
      },
    },
  },
  right: {
    val: 6,
    left: {
      val: 5,
    },
    right: {
      val: 7,
      right: {
        val: 8,
      },
    },
  },
};
console.log(convertBST(root));
// @lc code=end
