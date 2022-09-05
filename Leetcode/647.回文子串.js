/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = (dp[i + 1]?.[j - 1] || 0) + 1;
      } else {
        dp[i][j] = (dp[i + 1]?.[j] || 0) + (dp[i]?.[j - 1] || 0) - (dp[i + 1]?.[j - 1] || 0);
      }
    }
  }
  return dp[0][s.length - 1];
};
console.log(countSubstrings('abc'));
// @lc code=end
