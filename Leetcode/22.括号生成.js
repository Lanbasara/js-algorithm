/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.50%)
 * Likes:    2789
 * Dislikes: 0
 * Total Accepted:    558.1K
 * Total Submissions: 720.1K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    // 排列
    // 0-1背包
    let dp = new Array(n*2+1).fill(0)
    for(let i=0;i<dp.length;i++){
        dp[i] = []
    }
    let resource = new Array(n*2)
    for(let i=0;i<resource.length;i++){
        if(i%2){
            resource[i] = "("
        } else {
            resource[i] = ')'
        }
    }
    for(let i=1;i<=n*2;i++){
        for(let j=0;j<resource.length;i++){
            try {
                if(i > j){
                    dp[i] = dp[i-j].concat(resource[j])
                }
                if(i === n){
                    console.log(dp[i])
                }
            } catch(e){
                console.log('sss')
            }
        }
    }
};
console.log(generateParenthesis(3))
// @lc code=end

