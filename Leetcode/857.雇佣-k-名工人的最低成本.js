/*
 * @lc app=leetcode.cn id=857 lang=javascript
 *
 * [857] 雇佣 K 名工人的最低成本
 */

// @lc code=start
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
  let list = quality.map((q,index) => {
      return {
          rate : q/wage[index],
          q : q
      }
  })
  list.sort((a,b) => b.rate - a.rate)
  let min = Infinity;
  let sum = 0;
  let maxHeap = new MaxPriorityQueue({priority : (res) => res.q})
  for(let i=0;i<quality.length;i++){
      maxHeap.enqueue(list[i])
      sum += list[i].q
      if(maxHeap.size() === k) {
          min = Math.min(min, sum * 1/list[i].rate)
          sum -= maxHeap.dequeue().element.q
      }
  }
  return min
};
// @lc code=end

