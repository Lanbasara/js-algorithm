/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ]);
  let res = [];
  function backTrack(index, track) {
    if (track.length === digits.length) {
      res.push([...track].join(''));
      return;
    }
    for (let i = 0; i < map.get(digits[index]).length; i++) {
      track.push(map.get(digits[index])[i]);
      backTrack(index + 1, track);
      track.pop();
    }
  }
  backTrack(0, []);
  return res;
};
console.log(letterCombinations('23'));
// @lc code=end
