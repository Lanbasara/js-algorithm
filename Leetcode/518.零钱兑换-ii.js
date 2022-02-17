/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let dp = new Array(amount+1).fill(0)
  dp[0] = 1
  for(let i=0;i<coins.length;i++){
    for(let j=0;j<amount+1;j++){
      dp[j] += dp[j-coins[i]] || 0
    }
  }

  return dp[amount]
};
const amount = 5, coins = [1, 2, 5]
console.log(change(5,coins))