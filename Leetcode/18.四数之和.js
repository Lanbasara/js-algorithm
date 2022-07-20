/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (38.98%)
 * Likes:    1287
 * Dislikes: 0
 * Total Accepted:    337.6K
 * Total Submissions: 867K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 
 * 
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 
 * 
 * 你可以按 任意顺序 返回答案 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let set = new Set()
    nums.sort((a,b) => a-b)

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let [l,r] = [j+1,nums.length-1]
            while(l<r){
                let sum = nums[i]+nums[j]+nums[l]+nums[r]
                if(sum > target){
                    r--
                } else if(sum < target){
                    l++
                } else {
                    set.add(JSON.stringify([nums[i],nums[j],nums[l],nums[r]]))
                    l++
                    r--
                }
            }
        }
    }

    return Array.from(set).map(JSON.parse)
};
// @lc code=end

