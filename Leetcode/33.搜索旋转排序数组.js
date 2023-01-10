/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.length) return -1
    let [l,r] = [0,nums.length-1]
    while(l<=r){
        let mid = Math.floor(l+(r-l)/2)
        if(nums[mid] === target) return mid
        if(nums[l] === target) return l
        if(nums[r] === target) return r
        if(nums[mid] >= nums[l]){
            if(target > nums[l] && target < nums[mid]){
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if(target > nums[mid] && target < nums[r]){
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return -1
};
// @lc code=end

