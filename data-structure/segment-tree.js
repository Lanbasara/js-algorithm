/**
 * 线段树
 * 1. 用树来维护区间信息，对于有结合律的操作（求和，求差，求积，求最值等），可以在O(logn)时间内完成区间信息的维护（外部表现仍然是数组，类似优先队列）
 * 2. 与树状数组的区别在于，树状数组用来维护前缀信息。前缀信息相当于是区间信息的子集
 * https://www.cnblogs.com/RioTian/p/13409694.html
 * https://www.acwing.com/file_system/file/content/whole/index/content/560401/
 */

class SegmentTree {
  constructor(array) {
    this.start = 0;
    this.end = array.length - 1;
    this.tree = this.build(this.start, this.end, array);
  }
  build(start, end, array) {
    const dp = new Array();
    function _build(l, r, p) {
      if (l === r) {
        dp[p] = array[l];
        return;
      }
      let mid = Math.floor(l + (r - l) / 2);
      _build(l, mid, 2 * p + 1);
      _build(mid + 1, r, 2 * p + 2);
      dp[p] = dp[2 * p + 1] + dp[2 * p + 2];
    }
    _build(start, end, 0);
    return dp;
  }

  getSum(from, to, l = this.start, r = this.end, p = 0) {
    if (from <= l && to >= r) {
      return this.tree[p];
    }
    let mid = Math.floor(l + (r - l) / 2);
    let sum = 0;
    if (from <= mid) sum += this.getSum(from, to, l, mid, 2 * p + 1);
    if (to > mid) sum += this.getSum(from, to, mid + 1, r, 2 * p + 2);
    return sum;
  }
}

module.exports = {
  SegmentTree,
};
