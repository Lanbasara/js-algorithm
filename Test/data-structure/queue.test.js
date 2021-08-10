const { MyQueue, MyCycleQueue } = require('../../data-structure/queue')
test('单链队列', () => {
    const myQueue = new MyQueue()
    myQueue.enQueue(1)
    myQueue.enQueue(2)
    myQueue.enQueue(3)
    myQueue.enQueue(4)
    myQueue.enQueue(5)
    expect(myQueue.deQueue()).toBe(1);
    expect(myQueue.deQueue()).toBe(2);
    expect(myQueue.deQueue()).toBe(3);
    expect(myQueue.deQueue()).toBe(4);
    expect(myQueue.deQueue()).toBe(5);
});
test('循环队列', () => {
    const myQueue = new MyCycleQueue(4)
    myQueue.enQueue(1)
    myQueue.enQueue(2)
    myQueue.enQueue(3)
    myQueue.enQueue(4)
    myQueue.enQueue(5)
    expect(myQueue.deQueue()).toBe(1);
    expect(myQueue.getHeader()).toBe(2);
    expect(myQueue.deQueue()).toBe(2);
    console.log('queue is', myQueue)
    expect(myQueue.getHeader()).toBe(3);
    expect(myQueue.deQueue()).toBe(3);
    expect(myQueue.getHeader()).toBe(4);
    expect(myQueue.deQueue()).toBe(4);
});