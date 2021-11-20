/*
 * @lc app=leetcode.cn id=1642 lang=javascript
 *
 * [1642] 可以到达的最远建筑
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const {MinPriorityQueue} = require("@datastructures-js/priority-queue")
var furthestBuilding = function(heights, bricks, ladders) {
    let minHeap = new MinPriorityQueue()
    for(let i=1;i<heights.length;i++){
        let diff = heights[i] - heights[i-1];
        if(diff <=0){
            continue
        }
        if(bricks <diff && ladders > 0){
            ladders--;
            if(minHeap.size()>0 && -minHeap.front().element > diff){
                bricks -= minHeap.dequeue().element
            } else {
                continue
            }
        }
        bricks -= diff
        if(bricks < 0){
            return i-1
        }
        minHeap.enqueue(-diff)
    }
    return heights.length - 1
};
const heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
console.log(furthestBuilding(heights,bricks,ladders))
// @lc code=end

