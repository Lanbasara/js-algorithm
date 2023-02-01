/**
 * 线段树
 * 1. 用树来维护区间信息，对于有结合律的操作（求和，求差，求积，求最值等），可以在O(logn)时间内完成区间信息的维护（外部表现仍然是数组，类似优先队列）
 * 2. 与树状数组的区别在于，树状数组用来维护前缀信息。前缀信息相当于是区间信息的子集
 * https://www.cnblogs.com/RioTian/p/13409694.html
 * https://www.acwing.com/file_system/file/content/whole/index/content/560401/
 */

class SegmentTree {
  constructor(nums){
    let length = nums.length
    this.n = length
    this.tree = new Array(length).fill(0).concat(nums)
    for(let i=length-1;i>0;i--){
      this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1]
    }
  }
  update(index,val){
    let i = index+this.n
    let delta = val - this.tree[i]
    while(i){
      this.tree[i] += delta
      i = Math.floor(i/2)
    }
  }
  sumRange(left,right){
    let [i,j] = [left+this.n, right+this.n]
    let sum = 0
    while(i<=j){
      if(i%2 === 1){
         sum += this.tree[i]
         i++
      }
      if(j % 2 === 0){
        sum += this.tree[j]
        j--
      }
      i = Math.floor(i/2)
      j = Math.floor(j/2)
    }
    return sum
  }
}

const tree = new SegmentTree([10, 11, 12, 13, 14])
module.exports = {
  SegmentTree,
};
