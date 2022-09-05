class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}
class MyLinkedList {
  inValid = ['inVaild'];
  constructor() {
    this.list = null;
    this.length = 0;
  }
  #checkIndexAndValid(index) {
    if (index > this.length) {
      return this.inValid;
    }
    if (index <= 0) {
      return 0;
    }
    return index;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }
    let node = this.list;
    let count = 0;
    while (count < index) {
      node = node.next;
      count++;
    }
    return node.val;
  }
  addAtHead(val) {
    let newNode = new ListNode(val);
    newNode.next = this.list;
    this.list = newNode;
    this.length++;
  }
  addAtTail(val) {
    let node = this.list;
    while (node.next) {
      node = node.next;
    }
    let newNode = new ListNode(val);
    node.next = newNode;
    this.length++;
  }
  addAtIndex(index, val) {
    index = this.#checkIndexAndValid(index);
    if (index === this.inValid) {
      return;
    }
    if (index === 0) {
      this.length++;
      this.addAtHead(val);
      return;
    }
    if (index === this.length) {
      this.length++;
      this.addAtTail(val);
      return;
    }
    let count = 0;
    let node = this.list;
    while (count < index - 1) {
      node = node.next;
      count++;
    }
    let newNode = new ListNode(val);
    let next = node?.next || null;
    newNode.next = next;
    node.next = newNode;
    this.length++;
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    if (index === 0) {
      let next = this.list?.next || null;
      this.list = next;
      return;
    }
    let count = 0;
    let node = this.list;
    while (count < index - 1) {
      node = node.next;
      count++;
    }
    let realNext = node?.next?.next || null;
    node.next = realNext;
    this.length--;
  }
}

const actions = [
  'MyLinkedList',
  'addAtHead',
  'addAtIndex',
  'get',
  'addAtHead',
  'addAtTail',
  'get',
  'addAtTail',
  'get',
  'addAtHead',
  'get',
  'addAtHead',
];
const datas = [[], [5], [1, 2], [1], [6], [2], [3], [1], [5], [2], [2], [6]];

let list;

for (let i = 0; i < actions.length; i++) {
  let action = actions[i];
  let data = datas[i];
  switch (action) {
    case 'MyLinkedList':
      list = new MyLinkedList();
      break;
    case 'addAtHead':
      list.addAtHead(...data);
      break;
    case 'addAtTail':
      list.addAtTail(...data);
      break;
    case 'addAtIndex':
      list.addAtIndex(...data);
      break;
    case 'get':
      console.log(list.get(...data));
      break;
    case 'deleteAtIndex':
      list.deleteAtIndex(...data);
      break;
    default:
      break;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
