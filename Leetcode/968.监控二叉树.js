/*
 * @lc app=leetcode.cn id=968 lang=javascript
 *
 * [968] 监控二叉树
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
 * @return {number}
 */
var minCameraCover = function (root) {
  let res = 0;
  // 定义三种可能的状态
  let [notCovered, Camera, Covered] = ['notCovered', 'Camera', 'Covered'];
  function postOrder(node) {
    if (!node) return Covered;
    let left = postOrder(node.left);
    let right = postOrder(node.right);
    if (left === notCovered || right === notCovered) {
      res++;
      return Camera;
    }
    if (left === Covered && right === Covered) {
      return notCovered;
    }
    if (left === Camera || right === Camera) {
      return Covered;
    }
  }
  // 如果根节点也没有覆盖,则需要增加一个
  let rootStatus = postOrder(root);
  if (rootStatus === notCovered) {
    res++;
  }
  return res;
};
// @lc code=end
