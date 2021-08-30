var reverseList = function(head) {
  const stack = []
  let node = head
  while(node){
      stack.push(node)
      node = node.next
  }
  if(stack.length===0){
      return head
  }
  console.log(stack)
  let newNode = stack.pop()
  let newList = newNode
  while(stack.length){
      let node = stack.pop()
      newNode.next = node
      newNode = newNode.next
  }
  newNode.next = null
  return newList

};