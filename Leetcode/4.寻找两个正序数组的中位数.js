/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (41.51%)
 * Likes:    5706
 * Dislikes: 0
 * Total Accepted:    770.9K
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const {MaxPriorityQueue,MinPriorityQueue} = require('@datastructures-js/priority-queue')
 var findMedianSortedArrays = function(nums1, nums2) {
    let maxHeap = new MaxPriorityQueue()
    let minHeap = new MinPriorityQueue()
    function enqueue(val){
        maxHeap.enqueue(val)
        minHeap.enqueue(maxHeap.dequeue().element)
        if(maxHeap.size()<minHeap.size()){
            maxHeap.enqueue(minHeap.dequeue().element)
        }
    }
    function front(){
        if(minHeap.size() === maxHeap.size()){
            return (minHeap.front().element + maxHeap.front().element) / 2
        }
        return maxHeap.front().element
    }
    let [l,r] = [0,0]
    while(l<nums1.length || r<nums2.length){
        let val;
        if(l===nums1.length){
            val = nums2[r]
            r++
        } else if(r === nums2.length){
            val = nums1[l]
            l++
        } else {
            val = nums1[l] < nums2[r] ? nums1[l] : nums2[r]
            if(val === nums1[l]) l++
            else r++
        }
        enqueue(val)
    }
    return front()

};
console.log(findMedianSortedArrays([1,3],[2]))
// @lc code=end

