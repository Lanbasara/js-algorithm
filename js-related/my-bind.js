Function.prototype.bind2 = function () {
  let [context, ...params] = arguments;
  context.fn = this;
  var fn = function () {};
  let returnFn = function () {
    let newparams = params.concat(Array.from(arguments));
    return context.fn.apply(new.target ? this : context, newparams);
  };
  fn.prototype = this.prototype;
  returnFn.prototype = new fn();
  return returnFn;
};
