/*
 * @lc app=leetcode.cn id=632 lang=javascript
 *
 * [632] 最小区间
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const {MinPriorityQueue, MaxPriorityQueue} = require('@datastructures-js/priority-queue')
var smallestRange = function(nums) {
    let l = -Infinity,r= Infinity;
    let maxHeap = new MaxPriorityQueue({priority : res => res[0] });
    let min = Infinity;
    nums.forEach((num,index) => {
        min = Math.min(min, num[0])
        maxHeap.enqueue([
            num[0],
            index,
            0
        ])
    })
    while(true){
        let [max, row,col] = maxHeap.dequeue().element;
        if(max - min < r - l){
            [l,r] = [min,max]
        }
        if(col === nums[row].length-1){
            return [l,r]
        }
        maxHeap.enqueue([
            nums[row][col+1],
            row,
            col+1
        ])
        min = Math.min(min,nums[row][col+1])
    }
};
const nums = [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
console.log(smallestRange(nums))
// @lc code=end

