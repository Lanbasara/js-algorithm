/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 *
 * https://leetcode.cn/problems/design-linked-list/description/
 *
 * algorithms
 * Medium (33.89%)
 * Likes:    543
 * Dislikes: 0
 * Total Accepted:    145K
 * Total Submissions: 426.6K
 * Testcase Example:  '["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\n' +
  '[[],[1],[3],[1,2],[1],[1],[1]]'
 *
 * 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next
 * 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
 * 
 * 在链表类中实现这些功能：
 * 
 * 
 * get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
 * addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index
 * 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
 * deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * MyLinkedList linkedList = new MyLinkedList();
 * linkedList.addAtHead(1);
 * linkedList.addAtTail(3);
 * linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
 * linkedList.get(1);            //返回2
 * linkedList.deleteAtIndex(1);  //现在链表是1-> 3
 * linkedList.get(1);            //返回3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 所有val值都在 [1, 1000] 之内。
 * 操作次数将在  [1, 1000] 之内。
 * 请不要使用内置的 LinkedList 库。
 * 
 * 
 */

// @lc code=start
var ListNode = function(val,next){
    this.val = val
    this.next = next || null
}

var MyLinkedList = function() {
    this.dummyHead = {
        next : null
    }
    this.length = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index<0 || index >= this.length) return -1
    let node = this.dummyHead.next
    let counter = 0
    while(counter < index){
        node = node.next
        counter++
    }
    return node.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new ListNode(val)
    let next = this.dummyHead?.next || null
    newNode.next = next
    this.dummyHead.next = newNode
    this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = this.dummyHead.next
    if(node === null){
        this.dummyHead.next = new ListNode(val)
        return
    }
    while(node?.next){
        node = node.next
    }
    node.next = new ListNode(val)
    this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index <=0) {
        this.addAtHead(val)
        return
    }
    if(index === this.length) {
        this.addAtTail(val)
        return
    }
    let newNode = new ListNode(val)
    let count = 0
    let node = this.dummyHead?.next || null
    while(count < index-1){
        node = node?.next || null
        count++
    }
    //  console.log('index is',index,'val is',val,'list is',this.dummyHead.next)
    let prev = node
    let next = node?.next || null
    newNode.next = next
    prev.next = newNode
    this.length++

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index <0 && index>=this.length) return
    if(index === 0){
        let realNext = this.dummyHead?.next?.next
        this.dummyHead.next = realNext
        return
    }
    let count = 0
    let node = this.dummyHead.next
    while(count < index-1){
        node = node.next
        count++
    }
    let prev = node
    let next = prev?.next?.next || null
    prev.next = next
    this.length--
};
const actions = ["MyLinkedList","addAtTail","get"]
const datas = [[],[1],[0]]

let list
for(let i=0;i<actions.length;i++){
    let action = actions[i]
    let data = datas[i]
    switch(action){
        case "MyLinkedList":
            list = new MyLinkedList()
            break;
        case "addAtHead":
            list.addAtHead(data[0])
            break
        case "addAtIndex":
            list.addAtIndex(...data)
            break;
        case "addAtTail":
            list.addAtTail(data[0])
            break
        case "get":
            console.log(list.get(data[0]))
            break
        case "deleteAtIndex":
            list.deleteAtIndex(data[0])
            break
        default:
            break
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
