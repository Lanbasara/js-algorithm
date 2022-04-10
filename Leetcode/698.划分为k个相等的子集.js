/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  if (k > nums.length) return false;
  let sum = nums.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
  if (sum % k) return false;
  let bucket = new Array(k).fill(0);
  let part = sum / k;
  nums.sort((a, b) => b - a);
  function backTrack(index) {
    if (index === nums.length) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] !== part) {
          return false;
        }
        return true;
      }
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] + nums[index] > part) continue;
      bucket[i] += nums[index];
      if (backTrack(index + 1)) {
        return true;
      } else {
        bucket[i] -= nums[index];
      }
    }
    return false;
  }
  return backTrack(0);
};
// @lc code=end
