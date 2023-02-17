/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const set = new Set()
    function backTrack(index,track){
        if(index > nums.length) return
        if(track.length > 1){
            set.add(JSON.stringify([...track]))
        }
        for(let i=index;i<nums.length;i++){
            if(track.length > 0 && nums[i]<track[track.length-1]) continue
            track.push(nums[i])
            backTrack(i+1,track)
            track.pop()
        }
    }
    backTrack(0,[])
    return Array.from(set).map(JSON.parse)
};
// @lc code=end

