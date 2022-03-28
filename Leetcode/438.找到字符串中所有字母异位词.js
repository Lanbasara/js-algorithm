/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let targetRecord = {};
  for (let i = 0; i < p.length; i++) {
    targetRecord[p[i]] = (targetRecord[p[i]] || 0) + 1;
  }
  let l = 0;
  let count = 0;
  let res = [];
  let windowRecord = {};
  for (let r = 0; r < s.length; r++) {
    if (targetRecord[s[r]]) {
      windowRecord[s[r]] = (windowRecord[s[r]] || 0) + 1;
      if (windowRecord[s[r]] === targetRecord[s[r]]) {
        count++;
      }
    }
    while (count === Object.keys(targetRecord).length) {
      res.push(l);
      if (targetRecord[s[l]]) {
        windowRecord[s[l]] === 0 ? windowRecord[s[l]] : windowRecord[s[l]]--;
      }
      if (windowRecord[s[l]] !== targetRecord[s[l]]) {
        count--;
      }
      l++;
    }
  }
  return res;
};
let s = 'cbaebabacd',
  p = 'abc';
console.log(findAnagrams(s, p));
// @lc code=end
