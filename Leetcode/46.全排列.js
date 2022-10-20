/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//   let res = [];
//   function backTrack(index, track, source) {
//     if (source.length === 0) return;
//     if (track.length === nums.length) {
//       res.push([...track]);
//       return;
//     }

//     for (let i = 0; i < source.length; i++) {
//       track.push(source[i]);
//       sourceNext = JSON.parse(JSON.stringify(source));
//       sourceNext.splice(index, 1);
//       backTrack(i + 1, track, sourceNext);
//       track.pop();
//     }
//   }
//   backTrack(0, [], nums);
//   return res;
// };
var permute = function(nums) {
  let res = []
  function backTrack(index,track,used){
      if(index > nums.length) return 
      if(index >= nums.length){
          if(track.length === nums.length){
              res.push([...track])
              return
          }
          return 
      }

      for(let i=0;i<nums.length;i++){
          if(used[i] === true) continue

          track.push(nums[i])
          backTrack(i+1,track,used)
          track.pop()
      }
  }
  backTrack(0,[],new Array(nums.length).fill(false))
  return res
};
console.log(permute([1, 2, 3]));
// @lc code=end
