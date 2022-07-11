/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 *
 * https://leetcode.cn/problems/number-of-longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (44.28%)
 * Likes:    620
 * Dislikes: 0
 * Total Accepted:    67.5K
 * Total Submissions: 152.4K
 * Testcase Example:  '[1,3,5,4,7]'
 *
 * 给定一个未排序的整数数组 nums ， 返回最长递增子序列的个数 。
 * 
 * 注意 这个数列必须是 严格 递增的。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,5,4,7]
 * 输出: 2
 * 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [2,2,2,2,2]
 * 输出: 5
 * 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 * 
 * 
 * 
 * 
 * 提示: 
 * 
 * 
 * 
 * 
 * 1 <= nums.length <= 2000
 * -10^6 <= nums[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i] : arr[0,j]子序列， 是否是递增序列
// dp[i] = if dp[j] ? dp[j]+1
// count[i] : 结尾为i的子序列， 最长子序列的个数
var findNumberOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1)
    let count = new Array(nums.length).fill(1)
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                if(dp[j]+1 > dp[i]){
                    dp[i] = dp[j]+1
                    count[i] = count[j]
                } else if(dp[j]+1 === dp[i]){
                    count[i] += count[j]
                }
            }
        }
    }
    let max = Math.max(...dp)
    let res = 0
    for(let i=0;i<dp.length;i++){
        if(dp[i] === max){
            res += count[i]
        }
    }
    return res
};
// console.log(findNumberOfLIS([2,2,2,2,2]))
// @lc code=end

