/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if(!nums.length) return false
    let [l,r] = [0,nums.length-1]
    while(l<=r){
        let mid = Math.floor(l + (r-l)/2)
        if([nums[mid],nums[l],nums[r]].includes(target)) return true
        if(nums[l] === nums[mid]){
            l++
            continue
        }
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
    return false
};
console.log(search([1,0,1,1,1],0))
// @lc code=end

 