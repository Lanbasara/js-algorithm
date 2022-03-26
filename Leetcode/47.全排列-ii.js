/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  function backTrack(index, track, used) {
    if (index > nums.length) return;
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }
    let prev;
    for (let i = 0; i < nums.length; i++) {
      let temp = nums[i];
      if (used[i] === true) continue;
      if (prev !== undefined && prev === temp) continue;
      track.push(temp);
      used[i] = true;
      prev = temp;
      backTrack(i + 1, track, used);
      track.pop();
      used[i] = false;
    }
  }
  backTrack(0, [], new Array(nums.length).fill(false));
  return res;
};
console.log(permuteUnique([0, 0, 9]));
// @lc code=end
