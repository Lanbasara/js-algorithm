/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    nums.unshift(1)
    nums.push(1)
    const dp = new Array(nums.length).fill(0).map(() => new Array(nums.length).fill(0))

    for(let i=nums.length-1;i>=0;i--){
        for(let j=i+1;j<nums.length;j++){
            for(let k=i+1;k<j;k++){
                dp[i][j] = Math.max(dp[i][j],
                    dp[i][k] + dp[k][j] + (nums[i] * nums[k] * nums[j])
                    )
            }
        }
    }

    return dp[0][nums.length-1]
};

console.log(maxCoins([3,1,5,8]))
// @lc code=end

