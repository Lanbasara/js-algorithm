const LinkList = require('../../data-structure/link-list')

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 方法1: 正向遍历
 var removeNthFromEnd = function(head, n) {
  let node = head;
  function count(node){
      let count = 0;
      while(node){
          count++;
          node = node.next
      }
      return count
  }
  let sizeOfHead = count(node)
  let moveStep = sizeOfHead - n - 1
  if(moveStep===-1){
      return head.next
  }
  while(moveStep){
      node = node.next
      moveStep--;
  }
  node.next = node.next.next
  return head
};

// 方法2: 递归法

/**. Node.   n
 * ---------------
 * | null |   2  | return 0
 * ---------------
 * |   5  |   2  |. return 1
 * |   4  |   2  |. return 2
 * |   3  |   2  |. return 3.  (3 === 2+1)
 * |   2  |   2  |. return 4
 * |   1  |   2  |. return 5
 * ---------------
 */
var removeNthFromEnd2 = function(head, n) {
    function getLength(node,n){
        if(!node) return 0
        let pos = getLength(node.next,n) + 1
        if(pos === n+1){
            node.next = node.next.next
        }
        return pos
    }
    let pos = getLength(head,n)
    if(pos === n){
        return head.next
    }
    return head

};
const list = new LinkList()
list.addNodeToLast(1)
list.addNodeToLast(2)
list.addNodeToLast(3)
list.addNodeToLast(4)
list.addNodeToLast(5)
console.log(list.toArray())
removeNthFromEnd2(list.dummyHead.next,2)
console.log(list.toArray())
