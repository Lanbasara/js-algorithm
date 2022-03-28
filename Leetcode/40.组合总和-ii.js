/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  // let set = new Set()
  let res = [];
  function backTrack(index, track, curSum) {
    if (index > candidates.length) return;
    if (curSum === target) {
      // set.add(JSON.stringify([...track]))
      res.push([...track]);
      return;
    }
    let prev = 0;

    for (let i = index; i < candidates.length; i++) {
      if (prev === candidates[i]) continue;
      if (curSum + candidates[i] > target) break;
      track.push(candidates[i]);
      prev = candidates[i];
      backTrack(i + 1, track, curSum + candidates[i]);
      track.pop();
    }
  }
  backTrack(0, [], 0);
  // return Array.from(set).map(item => JSON.parse(item))
  return res;
};
console.log(combinationSum2([1, 1, 1, 2], 3));
// @lc code=end
