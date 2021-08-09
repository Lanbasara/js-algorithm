/**
 * 队列
 * 特点：先入先出（FIFO）
 * 核心操作
 * 1. 入队
 * 2. 出队
 * 3. 获取队首元素
 * 
 * 队列可以分为单链队列和循环队列
 * 循环队列优化了出队的时间复杂度
 * 单链队列，出队的为O(n)
 * 循环队列，出队为O(1)
 */

// 单链队列实现，类似栈，使用数组模拟
class MyQueue {
    constructor(){
        this.queue = []
    }
    enQueue(item){
        this.queue.push(item)
    }
    deQueue(){
        return this.queue.shift()
    }
    getHeader(){
        return this.queue[0]
    }
    getLength(){
        return this.queue.length
    }
    isEmpty(){
        return this.getHeader() === 0
    }
}
module.exports = MyQueue
