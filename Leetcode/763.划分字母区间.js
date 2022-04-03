/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }
  let result = [];
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, hash[s[i]]);
    if (right === i) {
      result.push(right - left + 1);
      left = i + 1;
    }
  }
  return result;
};
console.log(partitionLabels('ababcbacadefegdehijhklij'));
// @lc code=end
