/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  let source = new Array(n);
  for (let i = 1; i <= n; i++) {
    source[i - 1] = i;
  }
  function backTrack(index, track) {
    if (index > source.length) return;
    if (track.length === k) {
      res.push([...track]);
      return;
    }

    for (let i = index; i < source.length; i++) {
      track.push(source[i]);
      backTrack(i + 1, track);
      track.pop();
    }
  }
  backTrack(0, []);
  return res;
};
console.log(combine(4, 2));
// @lc code=end
