const BST = require('../data-structure/binary-search-tree')
/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 var levelOrder = function(root) {
  if(!root){
      return []
  }
  const res = []
  let q = []
  q.push(root)
  while(q.length){
      let temp = []
      let size = q.length
      for(let i=0;i<size;i++){
          let node = q.shift()
          if(node.left) q.push(node.left)
          if(node.right) q.push(node.right)
          temp.push(node.val)
      }
      res.push(temp)
  }
  return res
};
// [3,9,20,null,null,15,7]
/**
 *   3
   / \
  9  20
    /  \
   15   7
 */
const bst = new BST()
bst.addNodeTra(3)
bst.addNodeTra(9)
bst.addNodeTra(20)
bst.addNodeTra(null)
bst.addNodeTra(null)
bst.addNodeTra(15)
bst.addNodeTra(7)
console.log('bst is',bst)
debugger
// @lc code=end

