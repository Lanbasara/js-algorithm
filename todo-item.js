function curry(fn, args) {
  var length = fn.length;
  args = Array.isArray(args) ? args : args == null ? [] : [args]
  return function() {
    var newArgs = [].slice.call(arguments);
    for (var i = 0, len = args.length; i < len; i++) {
      if (args[i] === curry.placeholder) {
        args.splice(i, 1, newArgs.shift());
      }
      if (newArgs.length === 0) break;
    }
    var _args = args.concat(newArgs);
    var _filterArr = _args.filter(ele => ele !== curry.placeholder);
    if (_filterArr.length < length) {
      return curry.call(this, fn, _args);
    }
    return fn.apply(this, _args);
  };
}

curry.placeholder = "_"
var fn = curry(function(a, b, c, d, e) {
    console.log([a, b, c, d, e]);
},[1]);

// 验证 输出全部都是 [1, 2, 3, 4, 5]
fn(2, 3, 4, 5);
fn(2, 3, 4, 5);
fn(2, "_", 4, 5)(3);
fn(2, "_", 4)(3)(5);
fn(2, "_", "_", 5)("_", 4)(3)
fn(2)("_", 4, "_")(3,"_")(5)

fn('_')('_', '_', 5)(2)(3)(4)

// var fn2 = curry(function(a, b, c, d, e) {
// 	console.log([a, b, c, d, e]);
// });

// console.log('This is fn2')
// fn2(1, 2, 3, 4, 5);
// fn2("_", 2, 3, 4, 5)(1);
// fn2(1, "_", 3, 4, 5)(2);
// fn2(1, "_", 3)("_", 4)(2)(5);
// fn2(1, "_", "_", 4)("_", 3)(2)(5);
// fn2("_", 2)("_", "_", 4)(1)(3)(5)