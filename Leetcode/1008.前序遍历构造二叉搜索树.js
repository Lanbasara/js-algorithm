/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 前序遍历构造二叉搜索树
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var bstFromPreorder = function (preorder) {
  if (preorder.length === 0) return null;
  let root = new TreeNode(preorder[0]);
  let rightIndex;
  for (let i = 1; i < preorder.length; i++) {
    if (preorder[i] > preorder[0]) {
      rightIndex = i;
      break;
    }
  }
  root.left = bstFromPreorder(rightIndex === undefined ? preorder.slice(1) : preorder.slice(1, rightIndex));
  root.right = bstFromPreorder(rightIndex === undefined ? [] : preorder.slice(rightIndex));
  return root;
};
console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
// @lc code=end
