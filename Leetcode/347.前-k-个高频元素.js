/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  let map = new Map()
  nums.forEach(item => {
      if(map.has(item)){
          map.set(item, map.get(item)+1)
      } else {
          map.set(item,1)
      }
  })
  let minHeap = new MinPriorityQueue({priority: res => res.freq})

  for(let [key,value] of map){
      if(minHeap.size()<k){
          minHeap.enqueue({
              freq : value,
              value : key
          })
      } else {
          if(value > minHeap.front().element.freq){
              minHeap.dequeue()
              minHeap.enqueue({
              freq : value,
              value : key
              })
          }
      }
  }
  let res = []
  while(minHeap.size()){
      res.push(minHeap.dequeue().element.value)
  }
  return res
};
// @lc code=end

