const LinkList = require('../../data-structure/link-list')

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  if(!l1 && !l2){
return null
}
if(!l1){
    return l2
}
if(!l2) return l1
let l1Header = l1;
let l2Header = l2;
let newList = {next : null}
let node = newList
while(l1Header || l2Header){
    if(!l1Header) {
        node.next = l2Header
        break;
    }
    if(!l2Header){
        node.next = l1Header
        break;
    }
    if(l1Header.val > l2Header.val){
        node.next = l2Header
        l2Header = l2Header.next
    } else {
        node.next = l1Header
        l1Header = l1Header.next
    }
    node = node.next
}
return newList.next
};
const list1 = new LinkList()
list1.addNodeToLast(1)
list1.addNodeToLast(2)
list1.addNodeToLast(4)

const list2 = new LinkList()
list2.addNodeToLast(1)
list2.addNodeToLast(3)
list2.addNodeToLast(4)

console.log(list1.toArray())
console.log(list2.toArray())
console.log(mergeTwoLists(list1.dummyHead.next,list2.dummyHead.next))
console.log('结束')


var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2){
        return null
    }
    if(!l1){
        return l2
    }
    if(!l2){
        return l1
    }
    let newList = {next:null}
    let node = newList
    while(l1||l2){
        if(!l1){
            node.next = l2
            return 
        }
        if(!l2){
            node.next = l1
            return 
        }
        if(l1.val > l2.val){
            node.next = l2;
            l2 = l2.next
        } else {
            node.next = l1
            l1 = l1.next
        }
        node = node.next
    }
    return newList.next
};