/*
 * @lc app=leetcode.cn id=1448 lang=javascript
 *
 * [1448] 统计二叉树中好节点的数目
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
 var goodNodes = function(root) {
    let total = 0
    function prevOrder(node,max){
        if(!node) return null
        let res = node.val >= max
        if(res){
            total++
        }
        prevOrder(node.left, Math.max(node.val, max))
        prevOrder(node.res, Math.max(node.val, max))
    }
    prevOrder(root,root.val)
    return total
};
const root = {
    val : 3,
    left : {
        val: 1,
        left : {
            val : 3
        }
    },
    right : {
        val : 1,
        left : {
            val : 1
        },
        right : {
            val : 5
        }
    }
}
console.log(goodNodes(root))
// @lc code=end

