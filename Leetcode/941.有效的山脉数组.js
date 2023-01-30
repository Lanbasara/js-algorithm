/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;
  if(arr[0]>arr[1]) return false
  let count = 0;
  let [up, down] = [1, -1];
  let direction = up;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return false;
    }
    if (direction == up && arr[i] < arr[i - 1]) {
      direction = down;
      count++;
    } else if (direction === down && arr[i] > arr[i - 1]) {
      direction = up;
      count++;
    }
  }
  return direction === down && count === 1;
};

console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0]));
// @lc code=end
