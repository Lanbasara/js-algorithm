/**
 * 1. 创建对象
 * 3. 执行函数
 * 2. 绑定原型
 * 4. 返回结果，判断是否是对象
 */

// let myNew = function (fn, ...param) {
//   let obj = {};
//   let res = fn.apply(obj, param);
//   Object.setPrototypeOf(obj, fn.prototype);
//   return typeof obj === 'object' ? res || obj : obj;
// };

let myNew = function(fn,...param){
  let obj = {}
  let res = fn.apply(obj,param)
  Object.setPrototypeOf(obj, fn.prototype)
  return typeof res === 'object' ? res || obj : obj
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
