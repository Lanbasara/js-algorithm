/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 *
 * https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (57.35%)
 * Likes:    676
 * Dislikes: 0
 * Total Accepted:    256.3K
 * Total Submissions: 447K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[20,9],[15,7]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1]
 * 输出：[[1]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [0, 2000] 内
 * -100 <= Node.val <= 100
 * 
 * 
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
const {transformArrayToTree} = require('./utils/transformArrayToTree')
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let res = []
    let q = [root]
    let dire = true
    while(q.length){
        let size = q.length
        let temp = []
        let tempq = []
        for(let i=0;i<size;i++){
                let node = dire ? q.shift() : q.pop()
                temp.push(node.val)
                if(node.left) tempq.push(node.left)
                if(node.right) tempq.push(node.right)
        }
        dire = !dire
        q = q.concat(tempq)
        res.push(temp)
    }
    return res
};
console.log(zigzagLevelOrder(transformArrayToTree([1,2,3,4,null,null,5])))
// @lc code=end

