/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  function BFS(node) {
    let q = [node];
    while (q.length) {
      let size = q.length;
      let prev = null;
      for (let i = 0; i < size; i++) {
        let node = q.shift();
        if (i !== 0) {
          prev.next = node;
        }
        prev = node;
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
    }
  }
  BFS(root);
  return root;
};
// @lc code=end
