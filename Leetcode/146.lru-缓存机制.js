/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class ListNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}
class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
    this.dummyHead = {};
    this.dummyTail = {};
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }
  addNodeToHead(newNode) {
    let next = this.dummyHead.next;
    newNode.next = next;
    newNode.prev = this.dummyHead;
    next.prev = newNode;
    this.dummyHead.next = newNode;
  }
  removeNode(key) {
    let node = this.map.get(key);
    if (node) {
      let prev = node.prev;
      let next = node?.next || null;
      prev.next = next;
      next.prev = prev;
    }
  }
  removeItemFromMap(key) {
    this.map.delete(key);
  }

  addItemToMap(key, node) {
    this.map.set(key, node);
  }
  get(key) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      this.removeNode(key);
      let newNode = new ListNode(key, node.value);
      this.addNodeToHead(newNode);
      return node.value;
    } else {
      return -1;
    }
  }
  put(key, value) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      this.removeNode(key);
      this.removeItemFromMap(key);
      let newNode = new ListNode(key, value);
      this.addNodeToHead(newNode);
      this.addItemToMap(key, newNode);
    } else {
      let newNode = new ListNode(key, value);
      this.addNodeToHead(newNode);
      this.addItemToMap(key, newNode);
      if (this.map.size > this.capacity) {
        let lastKey = this.dummyTail?.prev?.key;
        if (lastKey !== undefined) {
          this.removeNode(lastKey);
          this.removeItemFromMap(lastKey);
        }
      }
    }
  }
}

const actions = ['LRUCache', 'put', 'put', 'get', 'put', 'put', 'get'];
const datas = [[2], [2, 1], [2, 2], [2], [1, 1], [4, 1], [2]];

let list;
for (let i = 0; i < actions.length; i++) {
  let action = actions[i];
  let data = datas[i];
  switch (action) {
    case 'LRUCache':
      list = new LRUCache(...data);
      break;
    case 'put':
      list.put(...data);
      break;
    case 'get':
      console.log(list.get(...data));
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
