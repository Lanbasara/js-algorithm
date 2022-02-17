const { myCall } = require('../../js-related/my-call&apply');
Function.prototype.myCall = myCall;
Function.prototype.myApply = function (context, params) {
  context.fn = this;
  let res = context.fn(...params);
  delete context.fn;
  return res;
};
test('myCall', () => {
  var foo = {
    value: 1,
  };
  function bar(name, age) {
    console.log(name);
    console.log(age);
    return {
      value: this.value,
      name,
      age,
    };
  }

  expect(bar.myCall(foo, 'kevin', 18)).toEqual({
    value: 1,
    name: 'kevin',
    age: 18,
  });

  expect(bar.myApply(foo, ['kevin', 18])).toEqual({
    value: 1,
    name: 'kevin',
    age: 18,
  });
});
