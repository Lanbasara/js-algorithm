/*
 * @lc app=leetcode.cn id=834 lang=javascript
 *
 * [834] 树中距离之和
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var sumOfDistancesInTree = function(n, edges) {
  // step1: 构建图
  const graph = {};
  const distSum = {}
  const nodeSum = {}
  for(let i=0;i<n;i++){
    graph[i] = []
    distSum[i] = 0
    nodeSum[i] = 1
  }
  for(let edge of edges || []){
    let [from,to] = edge;
    graph[from] = graph[from] || []
    graph[from].push(to)
  }
  // console.log(graph)
  // step2: 后序遍历
  function postOrder(node,parent){
    let neighbors = graph[node];
    // console.log(neighbors)
    if(neighbors.length > 0){
      for(let neighbor of neighbors){
        if(neighbor == parent){
          continue
        }
        postOrder(neighbor,node)
        nodeSum[node] += (nodeSum[neighbor] + 1)
        distSum[node] += (nodeSum[neighbor] + distSum[neighbor])
    }
    }
  }
  postOrder(0,-1);
  // step3: 前序遍历，多退少补
  function prevOrder(node,parent){
    let neighbors = graph[node]
    for(let neighbor in neighbors){
      if(neighbor == parent){
        continue
      }
      distSum[neighbor] = distSum[node] - nodeSum[neighbor] + (n - nodeSum[neighbor])
      prevOrder(neighbor,node)
    }
  }
  prevOrder(0,-1)

  return distSum
};
console.log(sumOfDistancesInTree(6,[[0,1],[0,2],[2,3],[2,4],[2,5]]))
// @lc code=end

