/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    let nums2 = nums.concat([...nums])
    let stack = []
    let res = new Array(nums.length).fill(-1)
    for(let i=0;i<nums2.length;i++){
        let back = stack[stack.length-1]?.[1]
        while(back !== undefined && back < nums2[i]){
            let [index,_] = stack.pop()
            res[index] = nums2[i]
            back = stack[stack.length-1]?.[1]
        }
        stack.push([i,nums2[i]])
    }
    return res.slice(0,nums.length)
};
console.log(nextGreaterElements([100,1,11,1,120,111,123,1,-1,-100]))
// @lc code=end