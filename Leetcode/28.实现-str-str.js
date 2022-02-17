/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

};

const getNext = (needle) => {
  let next = [];
  let j = -1;
  next.push(j);

  for (let i = 1; i < needle.length; ++i) {
      while (j >= 0 && needle[i] !== needle[j + 1])
          j = next[j];
      if (needle[i] === needle[j + 1])
          j++;
      next.push(j);
  }

  return next;
}
console.log(getNext('aabaaf'))
// @lc code=end

