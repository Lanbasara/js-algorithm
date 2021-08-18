/**
 * 并查集
 * https://zhuanlan.zhihu.com/p/93647900
 * 核心操作
 * 1. Find 寻找元素所在的子集
 * 2. Union 合并子集
 */
class DisjointSet {
  constructor(count) {
    this.parent = new Array(count);
    this.rank = new Array(count);
    for (let i = 0; i < count; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
    }
  }
  find(p) {
    while (p !== this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }
    return p;
  }
  isContact(p, q) {
    return this.find(p) === this.find(q);
  }
  union(p, q) {
    let i = this.find(p);
    let j = this.find(q);
    if (i === j) return;
    if (this.rank[i] < this.rank[j]) {
      this.parent[i] = j;
    } else if (this.rank[i] > this.rank[j]) {
      this.parent[j] = i;
    } else {
      this.parent[i] = j;
      this.rank[j] += 1;
    }
  }
}
const ds = new DisjointSet(3);
console.log(ds.find(2));
console.log(ds.find(1));
console.log(ds.isContact(2, 1));
ds.union(2, 1);
console.log(ds.isContact(2, 1));
