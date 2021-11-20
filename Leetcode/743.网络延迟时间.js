/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const {MinPriorityQueue} = require('@datastructures-js/priority-queue')
var networkDelayTime = function(times, n, k) {
  const graph = {}

  for(let i=0;i<times.length;i++){
      let [from,to,dist] = times[i]
      if(graph[from]){
          graph[from].push([to,dist])
      } else {
          graph[from] = [[to,dist]]
      }
  }
  console.log(graph)
  let ans = -1;
  for(let i=1;i<=n;i++){
      let dist = dijkstra(graph,k,i)
      if(dist === -1) return -1;
      ans = Math.max(ans, dist)
  }
  return res
  function dijkstra(graph, start,end){
      let minHeap = new MinPriorityQueue({priority : res => res[0]})
      minHeap.enqueue([0,start])
      let visited = new Set()
      while(minHeap.size()){
          let [cost, u] = minHeap.dequeue().element;
          if(visited.has(u)){
              continue
          }
          visited.add(u);
          if(u === end){
              return cost
          }
          for(let value of graph[u]){
              let [v,c] = value
              if(visited.has(v)){
                  continue
              }
              minHeap.enqueue([
                  c+cost,
                  v
              ])
          }
      }
      return -1
  }

};

const times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
console.log(networkDelayTime(times,n,k))
// @lc code=end

