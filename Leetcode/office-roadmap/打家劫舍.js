var rob = function(nums) {
  if(nums.length===1) return nums[0]
  if(nums.length === 0) return 0
  let dp = new Array(nums.length)
  nums.forEach((item,index) => {
    dp[index] = new Array(2).fill(0)
  });
  dp[0][0] = 0;
  dp[0][1] = nums[0]
  for(let i=1;i<nums.length;i++){
      dp[i][0] = Math.max(dp[i-1][1],dp[i-1][0])
      dp[i][1] = dp[i-1][0] + nums[i]
  }
  return Math.max(dp[dp.length-1][0],dp[dp.length-1][1])
};

console.log(rob([2,1,1,2]))