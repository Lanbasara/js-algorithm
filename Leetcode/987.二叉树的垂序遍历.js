/*
 * @lc app=leetcode.cn id=987 lang=javascript
 *
 * [987] 二叉树的垂序遍历
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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const map = new Map()

  function prevOrder(node, row, col) {
    if (!node) return;
    if(!map.has(col)){
        map.set(col,[node])
    } else {
        map.get(col).push(node)
    }
    node.row = row;
    node.col = col;
    prevOrder(node.left, row + 1, col - 1);
    prevOrder(node.right, row + 1, col + 1);
  }
  prevOrder(root, 0, 0);

  const res = [];

  while (map.size) {
    let minIndex = Math.min(...Array.from(map.keys()));
    let temp = map.get(minIndex)
      .sort((a, b) => {
        if (a.row === b.row) {
          return a.val - b.val;
        }
        return a.row - b.row;
      })
      .map((item) => item.val);
    res.push(temp);
    map.delete(minIndex)
  }

  return res;
};
const root = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};
console.log(verticalTraversal(root));
// @lc code=end
