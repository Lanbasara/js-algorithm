/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
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
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    if(!root) return res
    const res = []
    function prevOrderSetParent(node){
        if(!node) return
        if(node.left){
            node.left.parent = node
            prevOrderSetParent(node.left)
        }
        if(node.right){
            node.right.parent = node
            prevOrderSetParent(node.right)
        }
    }
    function traversal(node,path,parent){
        if(!node) return
        if(path > k) return
        if(path === k) {
            res.push(node.val)
            return
        }
        if(node.left && node.left !== parent){
            traversal(node.left,path+1,node)
        }
        if(node.right && node.right !== parent){
            traversal(node.right,path+1,node)
        }
        if(node.parent && node.parent !== parent){
            traversal(node.parent, path+1, node)
        }
    }
    prevOrderSetParent(root)
    traversal(target,0,null)
    return res
};
// @lc code=end

