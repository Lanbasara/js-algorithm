/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  n = n.toString();
  n = n.split('').map((item) => {
    return +item;
  });
  let flag = Infinity;
  for (let i = n.length - 1; i > 0; i--) {
    if (n[i - 1] > n[i]) {
      flag = i;
      n[i - 1] = n[i - 1] - 1;
      n[i] = 9;
    }
  }

  for (let i = flag; i < n.length; i++) {
    n[i] = 9;
  }

  n = n.join('');
  return +n;
};
console.log(monotoneIncreasingDigits(1221));
// @lc code=end
