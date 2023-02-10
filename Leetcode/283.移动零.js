/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let [l,r] = [0,0]
    while(r<nums.length){
        if(nums[r]!==0){
            [nums[r],nums[l]] = [nums[l],nums[r]]
            l++
            r++
        } else {
            r++
        }
    }
};
console.log(moveZeroes([1,2,3,4]))
// @lc code=end

