Function.prototype.call2 = function () {
  let [context, ...params] = arguments;
  context.fn = this;
  let res = context.fn(...params);
  delete context.fn;
  return res;
};

Function.prototype.apply2 = function () {
  let [context, params] = arguments;
  context.fn = this;
  let res = context.fn(...params);
  delete context.fn;
  return res;
};
var foo = {
  value: 1,
};
function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.call2(foo, 'kevin', 18);
bar.apply2(foo, ['kevin', 18]);

const myCall = function (context, ...params) {
  context.fn = this;
  let res = context.fn(...params);
  delete context.fn;
  return res;
};

module.exports = {
  myCall,
};
