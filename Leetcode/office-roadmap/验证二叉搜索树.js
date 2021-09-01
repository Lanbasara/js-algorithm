const BST = require('../../data-structure/binary-search-tree')
var isValidBST = function(root) {
  function midTraservalCheck(node){
      let res = true
      if(!node){
          midTraservalCheck(node.left)
          if(node.left.val > node.val){
              res = false
              return res
          }
          if(node.val > node.right.val){
              res = false
              return res
          }
          midTraservalCheck(node.right)
      }
      return res
  }
  return midTraservalCheck(root)
};
const bst = new BST()
bst.addNode(5)
bst.addNode(1)
bst.addNode(4)
bst.addNode(3)
bst.addNode(6)
console.log(bst)
bst.midTraversal()

debugger