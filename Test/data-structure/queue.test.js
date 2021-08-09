const MyQueue = require('../../data-structure/queue')
test('队列', () => {
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