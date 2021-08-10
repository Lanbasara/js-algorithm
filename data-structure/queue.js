/**
 * 队列
 * 特点：先入先出（FIFO）
 * 核心操作
 * 1. 入队
 * 2. 出队
 * 3. 获取队首元素（第一个元素）
 * 
 * 队列可以分为单链队列和循环队列
 * 循环队列优化了出队的时间复杂度
 * 单链队列，出队的为O(n)
 * 循环队列，出队为O(1)
 */

// 单链队列实现，类似栈，使用数组模拟
class MyQueue {
    constructor() {
        this.queue = []
    }
    enQueue(item) {
        this.queue.push(item)
    }
    deQueue() {
        return this.queue.shift()
    }
    getHeader() {
        return this.queue[0]
    }
    getLength() {
        return this.queue.length
    }
    isEmpty() {
        return this.getHeader() === 0
    }
}

/**
 * 循环队列
 * 要点: 
 * 1. 双指针指示头尾的位置
 * 2. 动态更新头尾指针
 * 3. trick: 最后一位是空的，方便尾指针运行指示
 * 4. 在更新指针的时候，需要使用 (%)操作 防止越界问题
 */
class MyCycleQueue {
    constructor(length) {
        // 要点3
        this.queue = new Array(length + 1)
        // 要点1
        this.head = 0
        this.tail = 0
        this.size = 0
    }
    isEmpty() {
        return this.queue.length === 0
    }
    isFull() {
        return ((this.tail + 1) % this.queue.length) === this.head
    }
    enQueue(item) {
        if (this.isFull()) {
            console.warn('queue is full')
            return
        }
        this.queue[this.tail] = item;
        this.size++;
        // 要点4
        this.tail = (this.tail + 1) % this.queue.length
    }
    deQueue() {
        if (this.isEmpty()) {
            console.warn('queue is empty')
            return
        }
        let item = this.queue[this.head];
        this.queue[this.head] = null;
        this.size--;
        // 要点4
        this.head = (this.head + 1) % this.queue.length
        return item;
    }
    getHeader() {
        if (this.isEmpty()) {
            console.warn('queue is empty')
            return
        }
        return this.queue[this.head]
    }
    getLength() {
        return this.size
    }

}

module.exports = { MyQueue, MyCycleQueue }
