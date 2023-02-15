/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = new Array(prices.length).fill(0).map(() => new Array(2))
    // has
    dp[0][0] = -prices[0]
    // not
    dp[0][1] = 0

    for(let i=1;i<prices.length;i++){
        dp[i][0] = Math.max(dp[i-1][0],-prices[i])
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
    }

    return Math.max(...dp[dp.length-1])
};
// @lc code=end

