/**
 * 堆
 * 数据上是数组，但是隐含着树形逻辑
 * 是完全二叉树，item是从上到下填充的
 * 大根堆：每个节点都大于子节点
 * 也是优先队列的一种形式
 *
 * 特点
 * 1. 任何节点的左子节点的index是 i*2 + 1 右子节点的index是 i*2 + 2
 * 2. 任何节点的父亲节点的index 是 (i-1)/2
 *
 * 要点
 * shiftUp 将添加的新节点up到对应的位置
 * shiftDown 将要删除的根结点删除后，重新整理
 */
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  add(value) {
    this.heap.push(value);
    return this._shiftUp(this.size() - 1);
  }
  removeMax() {
    return this._shiftDown(0);
  }
  getParentIndex(k) {
    return parseInt((k - 1) / 2);
  }
  getLeftIndex(k) {
    return parseInt(k * 2 + 1);
  }
  _shiftUp(k) {
    while (this.heap[k] > this.heap[this.getParentIndex(k)]) {
      [this.heap[k], this.heap[this.getParentIndex(k)]] = [this.heap[this.getParentIndex(k)], this.heap[k]];
      k = this.getParentIndex(k);
    }
  }
  _shiftDown(k) {
    [this.heap[k], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[k]];
    let target = this.heap.pop();
    while (this.getLeftIndex(k) < this.size()) {
      let j = this.getLeftIndex(k);
      if (j + 1 < this.size() && this.heap[j + 1] > this.heap[j]) j++;
      if (this.heap[k] > this.heap[j]) break;
      [this.heap[k], this.heap[j]] = [this.heap[j], this.heap[k]];
      k = j;
    }
    return target;
  }
}

module.exports = MaxHeap;
