/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  function mid(node) {
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
  const arr = mid(root);
  function check(array) {
    let res = [];
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        res.push([array[i], array[i + 1]]);
      }
    }
    if (res.length === 1) {
      return [res[0][0], res[0][1]];
    }
    if (res.length === 2) {
      return [res[0][0], res[1][1]];
    }
  }
  const [x, y] = check(arr);

  let count = 0;
  function dfs(node) {
    if (!node) return;
    if (count === 2) {
      return;
    }
    if (node.val === x) {
      node.val = y;
      count++;
    } else if (node.val === y) {
      node.val = x;
      count++;
    }
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return root;
};
// @lc code=end
