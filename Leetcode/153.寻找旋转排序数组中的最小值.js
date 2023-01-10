/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums[0]<nums[nums.length-1]) return nums[0]
    if(nums.length === 1) return nums[0]
    let [l,r] = [0,nums.length-1]
    while(l<=r){
        let mid = Math.floor(l + (r-l)/2)
        if(nums[mid]>nums[mid+1]) return nums[mid+1]
        if(nums[mid]<nums[mid-1]) return nums[mid]
        if(nums[mid]>=nums[l]){
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return -1
};
findMin([2,3,4,5,1])
// @lc code=end

