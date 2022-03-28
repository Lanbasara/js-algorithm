/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length < 2) return true;
  let records = new Array(nums.length).fill(false);
  records[0] = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (i <= records.lastIndexOf(true)) {
      let end = i + nums[i];
      if (end >= nums.length) end = nums.length - 1;
      records[end] = true;
    }
  }
  return records[nums.length - 1];
};
// @lc code=end
