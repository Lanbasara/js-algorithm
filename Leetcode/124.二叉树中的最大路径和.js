/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 var maxPathSum = function(root) {
    let res  = -Infinity

    function postOrder(node){
        if(!node)return 0
        let left = postOrder(node.left)
        let right = postOrder(node.right)
        res = Math.max(res, Math.max(left,0)+Math.max(right,0)+node.val)

        return Math.max(0,node.val + Math.max(Math.max(left,0), Math.max(right,0)))
    }

    postOrder(root)

    return res
};
// @lc code=end

