/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
  /*
  解空间 : [1,r] : r : 因为H  > piles.length, 所以r = Math.max(...piles)
  最小速度, 所以是最左二分, 考虑如何收缩右侧
  运行一次check, 如果可以, 就收缩右侧
   */
   let l = 1, r = Math.max(...piles)
   function check(mid){
       const temp = piles.reduce((acc,cur) => {
           acc += Math.ceil(cur/mid)
           return acc
       },0)
       return [temp <= h, temp]
   }
   while(l<=r){
       let mid = Math.floor(l + (r-l)/2)
       if(check(mid)[0]){
           r = mid - 1
       } else {
           l = mid + 1
       }
   }
   return l
};
console.log(minEatingSpeed([3,6,7,11],8))
// @lc code=end

