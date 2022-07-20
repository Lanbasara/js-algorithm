/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode.cn/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (49.93%)
 * Likes:    1721
 * Dislikes: 0
 * Total Accepted:    315.7K
 * Total Submissions: 632.3K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 * 
 * 返回 滑动窗口中的最大值 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1], k = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 单调队列
class MonoQueue{
    constructor(){
        this.queue = []
    }
    enqueue(val){
        if(this.isEmpty()){
            this.queue.push(val)
        } else {
            while(!this.isEmpty()&& this.queue[this.queue.length-1]<val){
                this.queue.pop()
            }
            this.queue.push(val)
        }
    }
    dequeue(val){
        if(val === this.queue[0]){
            let res = this.queue.shift()
            return res
        }
    }
    isEmpty(){
        return this.queue.length === 0
    }
    front(){
        return this.queue[0]
    }
}
var maxSlidingWindow = function(nums, k) {
    let monoQueue = new MonoQueue()
    let res = []
    for(let i=0;i<k;i++){
        monoQueue.enqueue(nums[i])
    }
    res.push(monoQueue.front())

    let [l,r] = [0,k]

    while(r<nums.length){
        monoQueue.dequeue(nums[l])
        monoQueue.enqueue(nums[r])
        res.push(monoQueue.front())
        l++
        r++
    }
    return res

};
// @lc code=end

