/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (64.72%)
 * Likes:    1770
 * Dislikes: 0
 * Total Accepted:    690.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: [3,2,1,5,6,4], k = 2
 * 输出: 5
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [3,2,3,1,2,4,5,5,6], k = 4
 * 输出: 4
 * 
 * 
 * 
 * 提示： 
 * 
 * 
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 class MinHeap{
    constructor(){
        this.heap = []
    }
    get length(){
        return this.heap.length
    }
    getLeft(index){
        return parseInt(index*2+1)
    }
    getParent(index){
        return parseInt((index-1)/2)
    }
    enqueue(value){
        this.heap.push(value)
        this.#shiftUp(this.length-1)
    }
    dequeue(){
        return this.#shiftDown(0)
    }
    front(){
        return this.heap[0]
    }
    #shiftUp(index){
        while(this.heap[index] < this.heap[this.getParent(index)]){
            [this.heap[index],this.heap[this.getParent(index)]] = [this.heap[this.getParent(index)],this.heap[index]]
            index = this.getParent(index)
        }
    }
    #shiftDown(index){
        [this.heap[this.length-1],this.heap[index]] = [this.heap[index],this.heap[this.length-1]]
        let res = this.heap.pop()
        while(this.getLeft(index)<this.length){
            let j = this.getLeft(index)
            if(j<this.length && this.heap[j+1]<this.heap[j]) j++
            if(this.heap[index]<this.heap[j]) break
            [this.heap[index],this.heap[j]]=[this.heap[j],this.heap[index]]
            index = j
        }
        return res
    }
}
var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap()
    for(let num of nums){
        if(minHeap.length <k){
            minHeap.enqueue(num)
        } else {
            if(num > minHeap.front()){
                minHeap.dequeue()
                minHeap.enqueue(num)
            }
        }
    }

    return minHeap.front()
};
// @lc code=end

