const MyJSStack = require("../../data-structure/stack");
test("栈", () => {
  const myJSStack = new MyJSStack();
  myJSStack.push(1);
  myJSStack.push(2);
  myJSStack.push(3);
  myJSStack.push(4);
  myJSStack.push(5);
  expect(myJSStack.pop()).toBe(5);
  expect(myJSStack.pop()).toBe(4);
  expect(myJSStack.pop()).toBe(3);
  expect(myJSStack.pop()).toBe(2);
  expect(myJSStack.pop()).toBe(1);
});
