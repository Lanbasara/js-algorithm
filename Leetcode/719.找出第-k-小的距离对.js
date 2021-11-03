/*
 * @lc app=leetcode.cn id=719 lang=javascript
 *
 * [719] 找出第 k 小的距离对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestDistancePair = function(nums, k) {
  nums.sort((a,b) => a - b);
  let l = 0
  let r = nums[nums.length-1]-nums[0]
  function count_ngt(mid){
      let slow = 0;
      let ans = 0;
      for(let i=0;i<nums.length;i++){
          let fast = i;
          while(nums[fast]-nums[slow] > mid){
              slow++
          }
          ans += fast-slow
      }
      return ans
  }
  while(l <= r){
   let mid =Math.floor((l+r)/2)
       if(count_ngt(mid)>=k){
           r = mid - 1
       } else {
           l = mid + 1
       }
   }
   return l
};
const nums = [1,6,1], k = 3
console.log(smallestDistancePair(nums,k))
// @lc code=end

