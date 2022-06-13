/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//   // 按照起始点排序
//   intervals.sort((a, b) => {
//     if (a[0] === b[0]) {
//       return a[1] - b[1];
//     }
//     return a[0] - b[0];
//   });
//   let res = [intervals[0]];
//   for (let i = 1; i < intervals.length; i++) {
//     if (intervals[i][0] <= temp[1]) {
//       let temp = res.pop();
//       res.push([Math.min(temp[0], intervals[i][0]), Math.max(temp[1], intervals[i][1])]);
//     } else {
//       res.push(intervals[i]);
//     }
//   }
//   return res;
// };

var merge = function(intervals) {
  let stack = []

  for(let i=0;i<intervals.length;i++){
    if(stack.length>=1 && intervals[i][0]<=stack[stack.length-1][1]){
      let temp = stack.pop()
      stack.push([Math.min(intervals[i][0],temp[0]),Math.max(intervals[i][1],temp[1])])
    } else {
      stack.push(intervals[i])
    }
  }
  return stack
};
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
// @lc code=end
