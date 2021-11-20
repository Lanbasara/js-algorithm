/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const {MaxPriorityQueue} = require("@datastructures-js/priority-queue")
 var kClosest = function(points, k) {
  function countDist(point){
    let l = Math.pow(Math.abs(point[0]),2)
    let r = Math.pow(Math.abs(point[1]),2)
    return Math.sqrt(l + r)
  }

  let maxHeap = new MaxPriorityQueue({priority: res => res.dist})

  for(let i=0;i<points.length;i++){
      let point = points[i];
      let dist = countDist(point);
       if(maxHeap.size()<k){
           maxHeap.enqueue({
               dist,
               point
           })
       } else {
           if(dist < maxHeap.front().element.dist){
               maxHeap.dequeue()
               maxHeap.enqueue({
                   dist,
                   point
               })
           }
       }
  }
  let res = []
  while(maxHeap.size()){
      res.push(maxHeap.dequeue().element.point)
  }
  return res
};
const pointers = [[-2,-6],[-7,-2],[-9,6],[10,3],[-8,1],[2,8]], k =5
console.log(kClosest(pointers,k))
// @lc code=end


