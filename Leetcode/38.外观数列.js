/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let res = '1';
  let reg = /(\d)\1*/g;
  for (let i = 2; i <= n; i++) {
    let temp = '';
    while ((match = reg.exec(res))) {
      let content = match[1];
      let len = match[0].length;
      temp += `${len}${content}`;
    }
    res = temp;
  }
  return res;
};
console.log(countAndSay(5));
// @lc code=end
