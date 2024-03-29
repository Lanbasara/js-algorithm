/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = new Array(prices.length).fill(0).map(() => new Array(3))
    // 持股
    dp[0][0] = -prices[0]
    // 不持股
    dp[0][1] = 0
    // cooldown
    dp[0][2] = 0

    for(let i=1;i<prices.length;i++){
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]-prices[i])
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][2])
        dp[i][2] = dp[i-1][0] + prices[i]
    }

    return Math.max(...dp[dp.length-1])
};
// @lc code=end

