/**
 * 1. 创建对象
 * 3. 执行函数
 * 2. 绑定原型
 * 4. 返回结果，判断是否是对象
 */

function myNew(func, ...param) {
  let obj = Object.create(null);
  Object.setPrototypeOf(obj, func.prototype);
  let res = func.apply(obj, param);
  return typeof res === 'object' ? res || obj : obj;
}

test('my-new', () => {
  function test(val, name) {
    this.val = val;
    this.name = name;
  }
  test.prototype.friend = 'frank';
  let obj = myNew(test, 1, 'name');
  expect(obj).toEqual({
    val: 1,
    name: 'name',
  });
  expect(obj.friend).toBe('frank');
});
