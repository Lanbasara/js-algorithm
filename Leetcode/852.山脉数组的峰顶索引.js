/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let [l,r] = [0,arr.length-1]
    let [up,down] = ["UP","DOWN"]
    while(l<=r){
        let mid = Math.floor(l + (r-l)/2)
        let left = (arr[mid-1]||0) > arr[mid] ? down :up 
        let right = arr[mid] > (arr[mid+1]||0) ? down : up
        if(left !== right) return mid
        if(left === down && right === down){
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return -1
};

peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19])
// @lc code=end

