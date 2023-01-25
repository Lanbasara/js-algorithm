// function myCurry(fn, params) {
//   let length = fn.length;
//   let args = Array.isArray(params) ? params : params == null ? [] : [params];

//   return function () {
//     let _args = args.concat(Array.from(arguments));
//     if (_args.length < length) {
//       return myCurry.call(this, fn, _args);
//     }
//     return fn.apply(this, _args);
//   };
// }

function curry(fn,params){
  let length = fn.length
  let args = Array.isArray(params) ? params : params == null ? [] : [params]

  return function(){
    let newArgs = Array.from(arguments)
    for(let i=0;i<args.length;i++){
      if(newArgs.length === 0) break;
      if(args[i] === curry.placeholder){
        args.splice(i,1,newArgs.shift())
      }
    }
    const _args = args.concat(newArgs)
    const filterArgs = _args.filter(item => item !== curry.placeholder)
    if(filterArgs.length < length){
      return curry.call(this,fn,_args)
    }
    return fn.apply(this,_args)
  }
}

curry.placeholder = "_"

module.exports = {
  curry,
};
