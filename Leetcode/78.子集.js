/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort((a,b) => a-b)
    let prev = null
    const res = []

    function backTrack(index,track){
        if(index > nums.length) return
        res.push([...track])

        for(let i=index;i<nums.length;i++){
            if(prev !=null && prev === nums[i]) continue
            track.push(nums[i])
            backTrack(i+1,track)
            track.pop()
        }
    }

    backTrack(0,[])

    return res
};
// @lc code=end

