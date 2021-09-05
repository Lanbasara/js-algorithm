var maxSubArray = function(nums) {
  if(nums.length == 1){
      return nums[0]
  }
  if(nums.length===0) return 0
  let dp = new Array(nums.length)
  dp[0] = nums[0]
  for(let i=1;i<nums.length;i++){
      dp[i] = Math.max(0,dp[i-1]) + nums[i]
  }
  return Math.max.call(null,...dp)
};

const nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))