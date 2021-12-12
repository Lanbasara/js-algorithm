/*
 * @lc app=leetcode.cn id=787 lang=javascript
 *
 * [787] K 站中转内最便宜的航班
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const {MinPriorityQueue} = require('@datastructures-js/priority-queue')
 var findCheapestPrice = function(n, flights, src, dst, k) {
  // 构建图
  const graph = {}
  for(let flight of flights){
      let [from,to,cost] = flight
      graph[from] = (graph[from] || [])
      graph[from].push([to,cost])
  }

  // 记录起点
  let minHeap = new MinPriorityQueue()
  minHeap.enqueue([src,0],0)

  // 记录是否访问过, 记录结果
  const visited = {}
  const timeRecord = {}
  const costRecord = {}

  // 迪科斯特拉算法
  while(minHeap.size()){
      let { element : [node,time], priority } = minHeap.dequeue()
      if(time > k+1){
          continue
      }
      if(node in visited  && time >= timeRecord[node] &&  priority>=costRecord[node]){
          continue
      }
      visited[node] = true
      timeRecord[node] = time
      costRecord[node] = priority

      if(node === dst){
          return priority
      }

      for(let next of graph[node] || []){
          let [nextTo, cost] = next
          minHeap.enqueue([nextTo, time+1], cost + priority)
      }
  }
  return -1
};
console.log(findCheapestPrice(4
  ,[[0,1,1],[0,2,5],[1,2,1],[2,3,1]]
  ,0
  ,3
  ,1))
// @lc code=end

