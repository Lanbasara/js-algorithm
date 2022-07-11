/*
 * @lc app=leetcode.cn id=1372 lang=javascript
 *
 * [1372] 二叉树中的最长交错路径
 *
 * https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree/description/
 *
 * algorithms
 * Medium (52.75%)
 * Likes:    81
 * Dislikes: 0
 * Total Accepted:    10.7K
 * Total Submissions: 20.2K
 * Testcase Example:  '[1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]'
 *
 * 给你一棵以 root 为根的二叉树，二叉树中的交错路径定义如下：
 * 
 * 
 * 选择二叉树中 任意 节点和一个方向（左或者右）。
 * 如果前进方向为右，那么移动到当前节点的的右子节点，否则移动到它的左子节点。
 * 改变前进方向：左变右或者右变左。
 * 重复第二步和第三步，直到你在树中无法继续移动。
 * 
 * 
 * 交错路径的长度定义为：访问过的节点数目 - 1（单个节点的路径长度为 0 ）。
 * 
 * 请你返回给定树中最长 交错路径 的长度。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
 * 输出：3
 * 解释：蓝色节点为树中最长交错路径（右 -> 左 -> 右）。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：root = [1,1,1,null,1,null,null,1,1,null,1]
 * 输出：4
 * 解释：蓝色节点为树中最长交错路径（左 -> 右 -> 左 -> 右）。
 * 
 * 
 * 示例 3：
 * 
 * 输入：root = [1]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每棵树最多有 50000 个节点。
 * 每个节点的值在 [1, 100] 之间。
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
 * @return {number}
 */
var longestZigZag = function(root) {
    let [L,R] = ['left','right']
    let res = 0

    function prevOrder(node,dire,value){
        if(!node) return 
        res = Math.max(res,value)
        if(dire === L){
            if(node.left){
                prevOrder(node.left,R,value+1)
            }
            // key : 不能使用else 因为即使此处目前left这条路更长，但是也要尝试right，有可能之后的是更长的结果
            if(node.right){
                prevOrder(node.right,L,1)
            }
        } else {
            if(node.right){
                prevOrder(node.right,L,value+1)
            }
            if(node.left){
                prevOrder(node.left,R,1)
            }
        }
    }

    prevOrder(root,L,0)
    prevOrder(root,R,0)

    return res
};
// @lc code=end

