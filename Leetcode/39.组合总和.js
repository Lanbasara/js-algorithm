/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = []
  function backTrack(index,path,curSum){
    if(index === candidates.length || curSum>target) return
    if(curSum === target){
      res.push([...path])
      return
    }

    for(let i=index;i<candidates.length;i++){
      path.push(candidates[i])
      backTrack(i+1,path,curSum+candidates[i])
      path.pop()
    }
  }
  backTrack(0,[],0)
  return res
};
// @lc code=end

