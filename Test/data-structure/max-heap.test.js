const { MaxHeap, MinHeap } = require('../../data-structure/max-heap');
test('大根堆，测试', () => {
  const maxHeap = new MaxHeap();
  maxHeap.add(4);
  maxHeap.add(3);
  maxHeap.add(6);
  maxHeap.add(1);
  maxHeap.add(-10);
  maxHeap.add(11);
  maxHeap.add(2);
  maxHeap.add(100);
  console.log(maxHeap.heap);
  expect(maxHeap.removeMax()).toBe(100);
  expect(maxHeap.removeMax()).toBe(11);
  expect(maxHeap.removeMax()).toBe(6);
  expect(maxHeap.removeMax()).toBe(4);
  expect(maxHeap.removeMax()).toBe(3);
  expect(maxHeap.removeMax()).toBe(2);
  expect(maxHeap.removeMax()).toBe(1);
  expect(maxHeap.removeMax()).toBe(-10);
});

test('小根堆，测试', () => {
  const maxHeap = new MinHeap();
  maxHeap.add(4);
  maxHeap.add(3);
  maxHeap.add(6);
  maxHeap.add(1);
  maxHeap.add(-10);
  maxHeap.add(11);
  maxHeap.add(2);
  maxHeap.add(100);
  expect(maxHeap.removeMax()).toBe(-10);
  expect(maxHeap.removeMax()).toBe(1);
  expect(maxHeap.removeMax()).toBe(2);
  expect(maxHeap.removeMax()).toBe(3);
  expect(maxHeap.removeMax()).toBe(4);
  expect(maxHeap.removeMax()).toBe(6);
  expect(maxHeap.removeMax()).toBe(11);
  expect(maxHeap.removeMax()).toBe(100);
});
