const LinkList = require('../../data-structure/link-list');
test('链表', () => {
  const myLinkList = new LinkList();
  myLinkList.addNodeToLast(1);
  myLinkList.addNodeToLast(2);
  myLinkList.addNodeToLast(3);
  myLinkList.addNodeToLast(4);
  myLinkList.addNodeToLast(5);
  myLinkList.removeLastNode();
  myLinkList.addNodeToFirst(3);
  myLinkList.revomeNode(3);
  expect(myLinkList.getNode(3).value).toBe(4);
});
