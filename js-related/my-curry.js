function myCurry(fn, params) {
  let length = fn.length;
  let args = Array.isArray(params) ? params : params == null ? [] : [params];

  return function () {
    let _args = args.concat(Array.from(arguments));
    if (_args.length < length) {
      return myCurry.call(this, fn, _args);
    }
    return fn.apply(this, _args);
  };
}

module.exports = {
  myCurry,
};
