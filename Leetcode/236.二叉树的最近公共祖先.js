/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function postOrder(node) {
    if (!node) return null;
    if (node === q || node === p) return node;
    let left = postOrder(node.left);
    let right = postOrder(node.right);
    if (left && !right) {
      return left;
    } else if (!left && right) {
      return right;
    } else if (!left && !right) {
      return null;
    } else {
      return node;
    }
  }
  return postOrder(root);
};
const root = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
    },
    right: {
      val: 2,
      left: {
        val: 7,
      },
      right: {
        val: 4,
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
    },
    right: {
      val: 8,
    },
  },
};
const p = root.left;
const q = root.right.right;
console.log(lowestCommonAncestor(root, p, q));
// @lc code=end
