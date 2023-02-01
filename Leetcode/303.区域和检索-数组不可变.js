/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.preffixSum = nums
    for(let i=1;i<nums.length;i++){
        this.preffixSum[i] += this.preffixSum[i-1]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.preffixSum[right] - (this.preffixSum[left-1]||0)
};

const tree = new NumArray([-2,0,3,-5,2,-1])
console.log(tree.preffixSum)
console.log(tree.sumRange(0,2))
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

