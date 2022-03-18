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
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
var topKFrequent = function (nums, k) {
  let minHeap = new MinPriorityQueue();
  let record = {};
  for (let num of nums) {
    record[num] = (record[num] || 0) + 1;
  }
  for (let key in record) {
    if (minHeap.size() < k) {
      minHeap.enqueue(key, record[key]);
    } else {
      if (record[key] > minHeap.front().priority) {
        minHeap.dequeue();
        minHeap.enqueue(key, record[key]);
      }
    }
  }
  let res = [];
  while (minHeap.size()) {
    res.push(minHeap.dequeue().element);
  }
  return res;
};
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
// @lc code=end
