/**
 * bind: 返回绑定了指定this的方法
 * 可以分2次传入参数
 * 返回的函数也可以作为构造函数调用，这时候绑定的this失效，效果等于直接调用原函数作为构造函数
 */
Function.prototype.bind2 = function (context, ...params) {
  context.fn = this;
  let fn = function () {};
  let resFn = function () {
    let args = params.concat(Array.from(arguments));
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
