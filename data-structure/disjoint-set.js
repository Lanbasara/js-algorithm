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
      this.rank[j] += 1;
    } else if (this.rank[i] > this.rank[j]) {
      this.parent[j] = i;
      this.rank[i] += 1;
    } else {
      this.parent[i] = j;
      this.rank[j] += 1;
    }
  }
}

class Node {
  constructor(v) {
    this.value = v;
    this.parent = null;
    this.rank = 1;
  }
}
class DisjointSetV2 {
  constructor() {
    this.map = new Map();
  }
  addNodeIn(v) {
    let newNode = new Node(v);
    this.map.set(v, newNode);
  }
  find(v) {
    let target = this.map.get(v);
    if (!target) return null;
    while (target.parent) {
      target = target.parent;
    }
    return target;
  }
  isContact(value1, value2) {
    return this.find(value1).value === this.find(value2).value;
  }
  union(value1, value2) {
    let origin1 = this.find(value1);
    let origin2 = this.find(value2);
    if (origin1.value > origin2.value) {
      origin2.parent = origin1;
      origin1.rank++;
    } else if (origin1.value < origin2.value) {
      origin1.parent = origin2;
      origin2.rank++;
    } else if (origin1.value === origin2.value) {
      if (origin1.rank > origin2.rank) {
        origin2.parent = origin1;
        origin1.rank++;
      } else if (origin1.rank < origin2.rank) {
        origin1.parent = origin2;
        origin2.rank++;
      } else if (origin1.rank === origin2.rank) {
        origin1.parent = origin2;
        origin2.rank++;
      }
    }
  }
}

module.exports = DisjointSetV2;
