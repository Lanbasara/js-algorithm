/**
 * 栈
 * 在JS中，通常可以使用数组来模拟栈的行为
 * 特点：先入后出（FILO）
 * 核心操作：
 * 1. 入栈
 * 2. 出栈
 * 3. peek 查看栈顶元素
 */
class MyJSStack {
  constructor(){
    this.stack = []
  }
  push(item){
    this.stack.push(item)
  }
  pop(){
    return this.stack.pop()
  }
  peek(){
    return this.stack[this.stack.length - 1]
  }
  getLength(){
    return this.stack.length
  }
  isEmpty(){
    return this.getLength() === 0
  }
}

module.exports = MyJSStack