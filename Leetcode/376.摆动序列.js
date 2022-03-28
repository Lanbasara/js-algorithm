/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length === 1) return 1;
  // 考虑前i个数，当第i个值作为峰谷时的情况（则第i-1是峰顶）
  let down = 1;
  // 考虑前i个数，当第i个值作为峰顶时的情况（则第i-1是峰谷）
  let up = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      down = Math.max(up + 1, down);
    }
    if (nums[i] > nums[i - 1]) {
      up = Math.max(down + 1, up);
    }
  }
  return Math.max(down, up);
};

console.log(wiggleMaxLength([2, 2, 5, 2, 2, 2, 3, 1]));
// @lc code=end
