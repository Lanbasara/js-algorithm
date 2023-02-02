/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const set = new Set()
    const res = []
    nums.sort((a,b) => a-b)
    for(let i=0;i<nums.length;i++){
        let [j,k] = [i+1,nums.length-1]
        while(j<k){
            let sum = nums[i] + nums[j] + nums[k]
            if(sum > 0){
                k--
            } else if(sum < 0){
                j++
            } else if(sum === 0){
                if(!set.has(JSON.stringify([nums[i],nums[j],nums[k]]))){
                    res.push([nums[i],nums[j],nums[k]])
                set.add(JSON.stringify([nums[i],nums[j],nums[k]]))
                }
                k--
                j++
            }
        }
    }
    return res
};

console.log(threeSum([-1,0,1,2,-1,-4]))
// @lc code=end

