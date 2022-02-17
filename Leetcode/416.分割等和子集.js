/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
  let sum = nums.reduce((acc,cur) => {
    acc += cur
    return acc
  },0)
  if(sum%2!==0){
    return false
  }
  let dp = new Array(sum/2+1).fill(0)

  for(let i=0;i<nums.length;i++){
    for(let j=sum/2;j>=0;j--){
      if(j === 0){
        dp[j] = 0
      } else if(i===0){
        dp[j] = j >= nums[i] ? nums[i] :0
      } else {
        if(j<nums[i]){
          dp[j] = dp[j]
        } else {
          dp[j] = Math.max(dp[j], dp[j-nums[i]]+nums[i])
        }
      }
    }
  }
  console.log(dp)
  return dp[sum/2] === (sum/2)
};
console.log(canPartition([1,2,5]))
// @lc code=end



