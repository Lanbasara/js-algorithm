/*
 * @lc app=leetcode.cn id=871 lang=javascript
 *
 * [871] 最低加油次数
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
const {MaxPriorityQueue} = require('@datastructures-js/priority-queue')
var minRefuelStops = function(target, startFuel, stations) {
  stations.push([target,0])
let res = 0;
let tankCur = startFuel;
let maxHeap = new MaxPriorityQueue()
for(let [target,temp] of stations){
   while(tankCur < target){
       let storage = maxHeap.dequeue()?.element
       if(storage === undefined){
           return -1
       }
       tankCur += storage;
       res++;
   }
   tankCur -= target
   maxHeap.enqueue(temp)
}
return res
};
const target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
console.log(minRefuelStops(target,startFuel,stations))
// @lc code=end

