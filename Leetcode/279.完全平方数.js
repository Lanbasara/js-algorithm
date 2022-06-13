/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    dp[1] = 1
    function isSquare(n) {
        return Number.isInteger(Math.sqrt(n))
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (isSquare(j)) {
                dp[i] = Math.min(dp[i], dp[j] + 1)
            }
        }
    }
    console.log(dp)
    return dp[n]
};
console.log(numSquares(12))
// @lc code=end

