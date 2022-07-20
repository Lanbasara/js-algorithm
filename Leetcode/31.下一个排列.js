/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode.cn/problems/next-permutation/description/
 *
 * algorithms
 * Medium (37.79%)
 * Likes:    1826
 * Dislikes: 0
 * Total Accepted:    336K
 * Total Submissions: 888.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
 * 
 * 
 * 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
 * 
 * 
 * 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列
 * 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 * 
 * 
 * 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
 * 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
 * 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
 * 
 * 
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 * 
 * 必须 原地 修改，只允许使用额外常数空间。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    let i = nums.length - 2;
    // 从右往左遍历拿到第一个左边小于右边的 i,此时 i 右边的数组是从右往左递增的
    while (i >= 0 && nums[i] >= nums[i+1]){
        i--;
    }
    if (i >= 0){
        let j = nums.length - 1;
        // 从右往左遍历拿到第一个大于nums[i]的数,因为之前nums[i]是第一个小于他右边的数，所以他的右边一定有大于他的数
        while (j >= 0 && nums[j] <= nums[i]){
            j--;
        }
        // 交换两个数
        [nums[j], nums[i]] = [nums[i], nums[j]];
   }
    // 对 i 右边的数进行交换
    // 因为 i 右边的数原来是从右往左递增的，把一个较小的值交换过来之后，仍然维持单调递增特性
    // 此时头尾交换并向中间逼近就能获得 i 右边序列的最小值
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r){
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
};
console.log(nextPermutation([1,3,2]))
// @lc code=end

