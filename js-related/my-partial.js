function partial(fn){
  let args = Array.from(arguments).slice(1)

  return function(){
    let newArgs = Array.from(arguments)
    for(let i=0;i<args.length;i++){
      if(newArgs.length === 0) break
      if(args[i] === partial.placeholder){
        args.splice(i,1,newArgs.shift())
      }
    }
    const _args = args.concat(newArgs)

    return fn.apply(this,_args)
  }
}

partial.placeholder = "_"

module.exports = {
  partial
}