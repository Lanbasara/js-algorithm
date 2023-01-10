/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
 *
 * https://leetcode.cn/problems/balance-a-binary-search-tree/description/
 *
 * algorithms
 * Medium (71.16%)
 * Likes:    127
 * Dislikes: 0
 * Total Accepted:    16.2K
 * Total Submissions: 22.7K
 * Testcase Example:  '[1,null,2,null,3,null,4]'
 *
 * 给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。如果有多种构造方法，请你返回任意一种。
 * 
 * 如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [1,null,2,null,3,null,4,null,null]
 * 输出：[2,1,3,null,null,null,4]
 * 解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入: root = [2,1,3]
 * 输出: [2,1,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树节点的数目在 [1, 10^4] 范围内。
 * 1 <= Node.val <= 10^5
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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    // Step1: Use mid-order traversal for bst
    const inorderRes = []
    function inorder(node){
        if(!node) return
        if(node.left) inorder(node.left)
        inorderRes.push(node.val)
        if(node.right) inorder(node.right)
    }
    inorder(root)

    // Step2: Build avl tree according to mid-order result
    function buildTree(array){
        if(!array.length) return null
        let midIndex = Math.floor(0+(array.length-1)/2)
        let midValue = array[midIndex]
        let root = new TreeNode(midValue)
        let leftPart = array.slice(0,midIndex)
        let rightPart = array.slice(midIndex+1)
        root.left = buildTree(leftPart)
        root.right = buildTree(rightPart)
        return root
    }

    return buildTree(inorderRes)
};

// @lc code=end

