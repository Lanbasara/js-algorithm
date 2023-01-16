/**
 * 线段树
 * 维护区间
 */
class SegementTree {
  constructor(array, start, end) {
    this.start = start || 0;
    this.end = end || array.length - 1;
    this.tree = this.buildTree(array, this.start, this.end);
  }
  buildTree(array, start, end) {
    const dp = new Array();
    function build(s, t, p) {
      if (s === t) {
        dp[p] = array[s];
        return;
      }
      let mid = Math.floor(s + (t - s) / 2);
      build(s, mid, 2 * p + 1);
      build(mid + 1, t, 2 * p + 2);
      dp[p] = dp[2 * p + 1] + dp[2 * p + 2];
    }
    build(start, end, 0);
    return dp;
  }

  getSum(l, r, s = this.start, t = this.end, p = 0) {
    if (l > t || r < s) return 0;
    if (l <= s && t <= r) {
      return this.tree[p];
    }
    let mid = Math.floor(s + (t - s) / 2),
      res = 0;
    if (l <= mid) res += this.getSum(l, r, s, mid, 2 * p + 1);
    if (r >= mid) res += this.getSum(l, r, mid + 1, t, 2 * p + 2);
    return res;
  }
}

let tree = new SegementTree([10, 11, 12, 13, 14]);
console.log(tree);
console.log(tree.getSum(0, 1));
