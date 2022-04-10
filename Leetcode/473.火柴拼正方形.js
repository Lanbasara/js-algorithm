/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  if (matchsticks.length < 4) return false;
  let sum = matchsticks.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
  if (sum % 4) return false;
  let bucket = new Array(4).fill(0);
  let part = sum / 4;
  matchsticks.sort((a, b) => b - a);
  function backTrack(index) {
    if (index === matchsticks.length) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] !== part) {
          return false;
        }
      }
      return true;
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] + matchsticks[index] > part) continue;
      bucket[i] += matchsticks[index];

      if (backTrack(index + 1)) {
        return true;
      } else {
        bucket[i] -= matchsticks[index];
      }
    }
    return false;
  }
  return backTrack(0);
};
console.log(makesquare([1, 1, 2, 2, 2]));
// @lc code=end
