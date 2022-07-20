/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let res = true

    function prevOrder(node1, node2){
        if(!node1 && !node2) {
            return
        }
        if(node1 && !node2){
            res = false
            return
        }
        if(!node1 && node2){
            res = false
            return
        }
        if(node1.val !== node2.val){
            res = false
        }
        prevOrder(node1.left, node2.left)
        prevOrder(node1.right, node2.right)
    }

    prevOrder(p,q)
    return res
};
const p = {
    val : 1,
    left : {
        val : 2
    },
    right : {
        val : 3
    }
}
const q = {
    val : 1,
    right : {
        val : 2
    }
}

isSameTree(p,q)
// @lc code=end

