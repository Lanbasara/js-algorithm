/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  function check(s) {
    let [l, r] = [0, s.length - 1];
    while (l < r) {
      if (s[l] !== s[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  function backTrack(index, track) {
    if (index >= s.length) {
      res.push([...track]);
      return;
    }

    for (let i = index; i < s.length; i++) {
      let temp = s.substring(index, i + 1);
      if (!check(temp)) continue;
      track.push(temp);
      backTrack(i + 1, track);
      track.pop();
    }
  }
  backTrack(0, []);
  return res;
};
// @lc code=end
