/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
  let count = 0;
  let maxCount = 0;
  let res = [];
  function inorder(node, prev = null) {
    if (!node) return;
    inorder(node.left, node);
    if (prev && prev.val === node.val) {
      count++;
    } else {
      count = 1;
    }
    if (count === maxCount) {
      res.push(node.val);
    }
    if (count > maxCount) {
      res = [];
      maxCount = count;
      res.push(node.val);
    }
    inorder(node.right, node);
  }
  inorder(root);
  return res;
};
const root = {
  val: 1,
  left: {
    val: 0,
    left: {
      val: 0,
      left: {
        val: 0,
      },
    },
    right: {
      val: 0,
    },
  },
  right: {
    val: 1,
    left: {
      val: 1,
    },
    right: {
      val: 1,
    },
  },
};
console.log(findMode(root));
// @lc code=end
