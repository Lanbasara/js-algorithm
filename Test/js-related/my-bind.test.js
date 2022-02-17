/**
 * 1. 返回函数
 * 2. 参数可以被分为2次传入
 * 2. 可以使用new
 */
// Function.prototype.bind2 = function (context, ...params) {
//   context.fn = this;
//   let fn = function () {};
//   let resFn = function () {
//     let args = params.concat(Array.from(arguments));
//     return context.fn.apply(new.target ? this : context, args);
//   };
//   fn.prototype = this.prototype;
//   resFn.prototype = new fn();
//   return resFn;
// };

Function.prototype.bind2 = function (context, ...params) {
  context.fn = this;
  let fn = function () {};
  let resFn = function () {
    const args = params.concat(Array.from(arguments));
    return context.fn.apply(new.target ? this : context, args);
  };
  fn.prototype = this.prototype;
  resFn.prototype = new fn();
  return resFn;
};

test('my-bind', () => {
  var foo = {
    value: 1,
  };

  function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
    return {
      value: this.value,
      name,
      age,
    };
  }

  var bindFoo = bar.bind2(foo, 'daisy');
  expect(bindFoo('18')).toEqual({
    value: 1,
    name: 'daisy',
    age: '18',
  });
  function bar2(name, age) {
    this.habbit = 'shopping';
    console.log('this.habbit is', this.habbit);
    console.log(this.value);
    console.log(name);
    console.log(age);
  }
  bar2.prototype.friend = 'kevin';
  var bindFoo2 = bar2.bind2(foo, 'daisy');
  let obj = new bindFoo2('18');
  expect(obj).toEqual({
    habbit: 'shopping',
  });
  expect(obj.friend).toBe('kevin');
});
