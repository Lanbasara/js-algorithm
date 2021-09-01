/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  let stack = []
  function getLength(node){
      if(!node.next){
          return 1
      }
      return getLength(node.next)+1
  }
  let length = getLength(head)
  let node = head
  while(node){
      stack.push(node)
      node = node.next
  }
  let secondHalf = {next:null}
  let node2 = secondHalf
  for(let i=0;i<length/2;i++){
      node2.next = stack.pop()
      node2 = node2.next
  }
  let secondHalfHead = secondHalf.next;
  for(let i=0;i<length/2;i++){
      if(secondHalfHead.val !== head.val){
          return false
      }
      secondHalfHead = secondHalfHead.next
      head = head.next
  }
  return true
};
// @lc code=end

