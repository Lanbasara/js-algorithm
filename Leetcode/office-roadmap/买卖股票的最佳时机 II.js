/**
 * 买卖股票的最佳时机 II
 * 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）
 *
 */

/**
 * @param {number[]} prices
 * @return {number}
 * @tags 贪心|动态规划
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let dp = new Array(prices.length).fill(new Array(2).fill(0));
  dp[0][1] = -prices[0];
  dp[0][0] = 0;
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
  }
  return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1]);
};

var maxProfit2 = function (prices) {
  if (prices.length < 2) return 0;
  const res = prices
    .map((item, index) => {
      if (index !== 0) {
        return item - prices[index - 1];
      }
    })
    .filter((item) => {
      return item > 0;
    });

  return !_.isEmpty(res)
    ? res.reduce((acc, cur) => {
        return (acc += cur);
      })
    : 0;
};

var maxProfit3 = function(prices) {
  const res = []
  for(let i=1;i<prices.length;i++){
      res.push(prices[i]-prices[i-1])
  }

  return res.reduce((acc,cur) => {
    if(cur>0){
      acc+=cur
    } else {
      acc+=0
    }
    return acc
  },0)
};

console.log(maxProfit3([7, 1, 5, 3, 6, 4]));
