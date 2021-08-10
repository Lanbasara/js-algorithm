/**
 * 链表
 * 特点
 * 1. 顺序读取
 * 2. 节省空间
 * 3. 递归结构
 * 要点
 * 1. 定义Node节点
 * 2. 核心操作为递归寻找前一个节点
 * 3. 使用一个特殊的Header节点来初始化，方便定位
 */

/**
 * 节点的定义
 */
// 要点1
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.size = 0;
    // 要点3
    this.dummyHead = new Node(null, null);
  }
  // 要点2
  find(header, index, currentIndex) {
    if (index === currentIndex) return header;
    return this.find(header.next, index, currentIndex + 1);
  }
  checkIndex(index) {
    if (index < -1 || index > this.size) throw Error('index error');
  }
  addNode(index, value) {
    this.checkIndex(index);
    let prev = this.find(this.dummyHead, index, 0);
    prev.next = new Node(value, prev.next);
    this.size++;
  }
  insertNode(index, value) {
    this.addNode(index, value);
  }
  addNodeToLast(value) {
    this.addNode(this.size, value);
  }
  addNodeToFirst(value) {
    this.addNode(0, value);
  }
  revomeNode(index) {
    this.checkIndex(index);
    if (index === this.size) {
      index = index - 1;
    }
    let prev = this.find(this.dummyHead, index, 0);
    let target = prev.next;
    prev.next = target.next;
    this.size--;
    console.log('remove target is', target);
    target = null;
    return target;
  }
  removeFirstNode() {
    this.revomeNode(0);
  }
  removeLastNode() {
    this.revomeNode(this.size);
  }
  isEmpty() {
    return this.size === 0;
  }
  getNode(index) {
    this.checkIndex(index);
    if (this.isEmpty()) {
      console.log('empty list');
      return null;
    }
    return this.find(this.dummyHead, index, 0).next;
  }
  getSize() {
    return this.size;
  }
}

module.exports = LinkList;
