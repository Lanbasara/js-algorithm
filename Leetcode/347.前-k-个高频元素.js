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
class MaxHeap {
  constructor(){
    this.heap = []
  }
  get length(){
    return this.heap.length
  }
  isEmpty(){
    return this.length === 0
  }
  enqueue(val){
    this.heap.push(val)
    this._shiftUp(this.heap.length-1)
  }
  dequeue(){
    let res = this._shiftDown(0)
    return res
  }
  _shiftUp(index){
    let k = index
    while(this.heap[this.getParentIndex(k)].val < this.heap[k].val){
      [this.heap[this.getParentIndex(k)],this.heap[k]] = [this.heap[k],this.heap[this.getParentIndex(k)]]
      k = this.getParentIndex(k)
    }
  }
  _shiftDown(index){
    [this.heap[index],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[index]]
    let res = this.heap.pop()
    while(this.getLeftIndex(index)<this.heap.length){
      let j = this.getLeftIndex(index)
      if(j+1 < this.heap.length && this.heap[j+1].val>this.heap[j].val) j = j+1
      if(this.heap[index].val>this.heap[j].val) break;
      [this.heap[index],this.heap[j]] = [this.heap[j],this.heap[index]]
      index = j
    }
    return res
  }
  getParentIndex(index){
    return parseInt((index-1)/2)
  }
  getLeftIndex(index){
    return parseInt(index * 2 + 1)
  }

}
var topKFrequent = function (nums, k) {
  let map = {}

  for(let num of nums){
    map[num] = map[num] || {
      val : 0,
      value : num
    }
    map[num].val++
  }

  let maxHeap = new MaxHeap()
  for(let key in map){
    maxHeap.enqueue(map[key])
  }

  let res = []

  while(k--){
    let temp = maxHeap.dequeue().value
    res.push(temp)
  }

  return res
};
// @lc code=end
