function type(obj) {
    let class2type = {}

    "Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(' ').map((item, index) => {
        class2type[`[object ${item}]`] = item.toLowerCase()
    })

    // 针对IE6以下，toString(null)和toString(undefined)返回Object
    if (obj == null) {
        return `${obj}`
    }
    return typeof obj === "object" || typeof obj === 'function' ?
        class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj
}


// plainObject
function isPlainObject(obj){
    let class2type = {}
    // 等于Object.prototype.toString()
    let toString = class2type.toString
    let hasOwn = class2type.hasOwnProperty
    
    let proto,constructor

    // 首先排除完全不属于Object系统的
    if(!obj || toString.call(obj) !== "[object Object]") return false
    // 获取原型
    proto = Object.getPrototypeOf(obj)
    // 无原型， 也就是来自Object.create(null)
    if(!proto){
        return true
    }
    // 拿到constructor
    constructor = hasOwn.call(proto,'constructor') && proto.constructor

    // 验证constructor是否是Object
    return typeof constructor === 'function' && hasOwn.toString.call(constructor) === hasOwn.toString.call(Object)
}


function isEmptyObject(obj){
    for(let name in obj){
        return false
    }
    return true
}

function isWindow(obj){
    return obj !== null && obj.window === window
}

function isArrayLike(obj){
    let length = !!obj && 'length' in obj && obj.length
    let typeRes = type(obj)

    // 首先排除window和函数
    if(typeRes === 'function' || isWinow(obj)) return false

    return typeRes === 'array' || length === 0 || typeof length  === 'number' && length > 0 && (length-1) in obj
}
module.exports = {
    type,
    isPlainObject,
    isEmptyObject
}