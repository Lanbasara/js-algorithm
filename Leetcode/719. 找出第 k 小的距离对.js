const {MinPriorityQueue} = require('@datastructures-js/priority-queue');
var smallestDistancePair = function(nums, k) {
  nums.sort((a,b) =>a-b)
  let h = []
  for(let i=0;i<nums.length-1;i++){
      h.push([
          nums[i+1] - nums[i],
          i,
          i+1
      ])
  }
  let minHeap = new MinPriorityQueue({priority : (res) => res[0]})
  h.forEach(item => { 
      minHeap.enqueue(item)
  })
  for(let i=0;i<k-1;i++){
      [diff,fr,to] = minHeap.dequeue().element
      if(to < nums.length -1 ){
          minHeap.enqueue([
              nums[to+1] - nums[fr],
              fr, 
              to + 1
          ])
      }
  }
  return minHeap.front().element[0]
};

console.log(smallestDistancePair([1,6,112,2222,43,112323,32,1222,2,1121,222222,111],4))