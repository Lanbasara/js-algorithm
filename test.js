class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getParentIndex(index) {
    return parseInt((index - 1) / 2);
  }
  getLeftIndex(index) {
    return parseInt(index * 2 + 1);
  }
  enqueue(value) {
    this.heap.push(value);
    this._shiftUp(this.size() - 1);
  }
  dequeue() {
    return this._shiftDown(0);
  }
  front() {
    return this.heap[0];
  }
  _shiftUp(index) {
    let k = index;
    while (this.heap[this.getParentIndex(k)][0] > this.heap[k][0]) {
      [this.heap[this.getParentIndex(k)], this.heap[k]] = [this.heap[k], this.heap[this.getParentIndex(k)]];
      k = this.getParentIndex(k);
    }
  }
  _shiftDown(index) {
    [this.heap[index], this.heap[this.size() - 1]] = [this.heap[this.size() - 1], this.heap[index]];
    let res = this.heap.pop();
    while (this.getLeftIndex(index) < this.size()) {
      let j = this.getLeftIndex(index);
      if (j + 1 < this.size() && this.heap[j + 1][0] < this.heap[j][0]) j++;
      if (this.heap[index][0] < this.heap[j][0]) break;
      [this.heap[index], this.heap[j]] = [this.heap[j], this.heap[index]];
      index = j;
    }
    return res;
  }
}

const minHeap = new MinHeap();
const a = [[5], [2], [3], [1], [4]];
a.forEach((item) => {
  minHeap.enqueue(item);
});
console.log(minHeap.dequeue());
console.log(minHeap.dequeue());
console.log(minHeap.dequeue());
