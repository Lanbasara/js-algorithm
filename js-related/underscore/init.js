(function (){
    let root = this
    let _ = function(obj){
        if(!(this instanceof _)) return new _(obj)
        this.wrapped = obj
    }

    _.log = function(str){
        console.log(str)
    }

    function functions(obj){
        let names = []
        for(let key in obj){
            if(Object.prototype.hasOwnProperty.call(obj,key)){
                if(typeof obj[key] === 'function'){
                    names.push(key)
                }
            }
        }
        return names.sort()
    }

    function mixin(obj){
       let funcs = functions(obj)
       for(let name of funcs){
        let func = _[`${name}`] = obj[`${name}`]
        _.prototype[`${name}`] = function(){
            let args = [this.wrapped].concat(Array.from(arguments))
            return  func.apply(_,args)
        }
       }
    }

    _.mixin = mixin

    mixin(_)

    root._ = _

})()

_.log('sssss')
_('ssss').log()

_.mixin({
    addOne(x){
        return x+1
    }
})

_.log(_.addOne(2))
console.log(_(2).addOne())

