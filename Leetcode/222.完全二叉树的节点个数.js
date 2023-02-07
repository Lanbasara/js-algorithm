/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
    let heigh = 0
    let node = root
    while(node){
        heigh++
        node = node.left
    }
    function isExist(root,heigh,mid){
        let bit = 1 << (heigh-2)
        let node = root
        while(node && bit > 0){
            if(bit & mid){
                node = node.right
            } else {
                node = node.left
            }
            bit >>= 1
        }
        return node != null
    }

    let [left,right] = [Math.pow(2,heigh-1),Math.pow(2,heigh)-1]
    while(left<=right){
        let mid = Math.floor(left + (right-left)/2)
        if(isExist(root,heigh,mid)){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
};

const root = {
    val : 1,
    left : {
        val : 2,
        left : {
            val :4,
        },
        right : {
            val : 5
        }
    },
    right : {
        val : 3,
        left : {
            val : 6
        }
    }
}

console.log(countNodes(root))
// @lc code=end

