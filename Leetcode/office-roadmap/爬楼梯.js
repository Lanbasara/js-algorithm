var climbStairs = function(n) {
  let dp = [];
  let i=3;
  dp[1] = 1 
  dp[2] = 2.
  while(i<=n){
      dp[i] = dp[i-1] + dp[i-2];
      i++
  }
  return dp[n]
};
console.log(climbStairs(4))