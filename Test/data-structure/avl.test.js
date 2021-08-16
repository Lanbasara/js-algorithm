const AVL = require('../../data-structure/avl');
test('平衡二叉树，测试', () => {
  const avl = new AVL();
  avl.addNode(4);
  avl.addNode(2);
  avl.addNode(6);
  avl.addNode(5);
  avl.addNode(7);
  avl.addNode(8);
  console.log(avl);
});
