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
  let arr = []

  function inorder(node){
    if(!node) return
    inorder(node.left)
    arr.push(node.val)
    inorder(node.right)
  }
  inorder(root)
  console.log('arr is',arr)

  function find(arr){
    let res = []

    for(let i=1;i<arr.length;i++){
      if(arr[i]<arr[i-1]){
        res.push([arr[i-1],arr[i]])
      }
    }

    if(res.length === 2){
      return [res[0][0],res[1][1]]
    }

    return res[0]
  }

  let [x,y] = find(arr)
  console.log('[x,y] is',[x,y])
  function prevOrder(node){
    if(!node) return
    if(node.val === x){
      node.val = y
    } else if(node.val === y){
      node.val = x
    }
    prevOrder(node.left)
    prevOrder(node.right)
  }

  prevOrder(root)
  return root
};
// @lc code=end
