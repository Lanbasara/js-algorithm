/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let dummyHead = {
        val : null,
        next : head
    }

    let node = dummyHead

    while(node && node.next){
        if(node?.next && node?.next?.next){
            if(node.next.val === node.next.next.val){
                let next = node.next
                let temp = node.next.val
                while(next && next.val === temp){
                    next = next?.next
                }
                node.next = next
            } else {
                node = node.next
            }
        } else {
            node = node.next
        }
    }

    return dummyHead.next || null
};
function createList(array){
    let root = new ListNode(array[0])
    let node = root
    for(let i=1;i<array.length;i++){
        node.next = new ListNode(array[i])
        node = node.next
    }
    return root
}
const head = createList([1,2,3,3,4,4,5])
console.log(deleteDuplicates(head))
// @lc code=end

