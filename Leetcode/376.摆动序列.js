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
  let [up, down] = ['up', 'down'];
  function counter(start) {
    let dir = start;
    let res = 1;
    for (let i = 1; i < nums.length; i++) {
      if (dir === 'up') {
        if (nums[i] < nums[i - 1]) {
          dir = down;
          res++;
        }
      } else {
        if (nums[i] > nums[i - 1]) {
          dir = up;
          res++;
        }
      }
    }
    return res;
  }
  let startWithUp = counter(up);
  let startWithDown = counter(down);
  return Math.max(startWithUp, startWithDown);
};

console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));
// @lc code=end
