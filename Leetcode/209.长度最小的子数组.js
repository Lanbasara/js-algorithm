/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (48.74%)
 * Likes:    1257
 * Dislikes: 0
 * Total Accepted:    372.5K
 * Total Submissions: 766K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]
 * ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 1 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    // slide window
    let [l,r] = [0,0]
    let sum = 0;
    let res = Infinity
    while(r<nums.length && l<nums.length){
        while(r<nums.length && sum < target){
            sum += nums[r]
            r++
        }
        while(sum >= target && l < nums.length){
            sum -= nums[l]
            l++
        }
        res = Math.min(res, r+1-l)
    }
    return res
};
console.log(minSubArrayLen(11,[1,1,1,1,1,1,1,1]))
// @lc code=end

