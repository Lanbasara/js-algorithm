
function curry(fn, params) {
    //  获取函数调用实际所需要的参数length
    var length = fn.length;
    // console.log("param is", params);
    let args = Array.isArray(params) ? params : params == null ? [] : [params];
    // console.log("args is", args);
    // 返回一个新函数
    return function () {
      let _args = args.concat(Array.from(arguments));
      if (_args.length < length) {
        return curry.call(this, fn, _args);
      } else {
        return fn.apply(this, _args);
      }
    };
  }
  
  function add(a, b, c) {
    return a + b + c;
  }
  
  const curryAdd = curry(add, 1);
  
  console.log(curryAdd(2)()(3));

module.exports = {
    curry
}