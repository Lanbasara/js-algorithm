/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  function backTrack(index, track) {
    if (index > nums.length) return;
    res.push([...track]);

    let prev = undefined;
    for (let i = index; i < nums.length; i++) {
      if (prev !== undefined && prev === nums[i]) continue;
      track.push(nums[i]);
      prev = nums[i];
      backTrack(i + 1, track);
      track.pop();
    }
  }

  backTrack(0, []);
  return res;
};
console.log(subsetsWithDup([1, 2, 2]));
// @lc code=end
