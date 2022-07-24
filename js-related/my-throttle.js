/**
 * 方法1: 使用时间戳 
 * 特点： 第一次立即触发
 */
function MyThrottle1(func, wait){
    let startTime = 0
    return function(){
        let context = this
        let param = arguments
        let now = Date.now()
        let interval = now - startTime
        if(interval > wait){
            startTime = now
            return func.apply(context,param)
        }
    }
}

/**
 * 方法2 : 使用定时器
 * 特点： 第一次延迟触发， 最后一次还有一次触发
 */
function MyThrottle2(func,wait){
    let timer = null
    return function(){
        let context = this
        let param = arguments
        if(!timer){
            timer = setTimeout(() => {
                func.apply(context, param)
                timer = null
            },wait)
        } else {
        }
    }
}

/**
 * 方法1 + 2
 */
function MyThrottle3(func, wait){
    let [prevous, timer,context, param] = [0,null,null,null];
    let later = function(){
        prevous = Date.now()
        timer = null
        func.apply(context, param)
    }

    let returnRes = function(){
        context = this
        param = arguments
        let now = Date.now()
        let remaining = wait - (now - prevous)
        // remaing > wait 以防修改时间戳
        if(remaining <=0 || remaining > wait){
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            prevous = now
            func.apply(context, param)
        } else if(!timer) {
            timer = setTimeout(later,wait)
        }
    }


    return returnRes
}

/**
 * 通过参数设置头尾
 */
function MyThrottle4(func, wait, options={}) {
    let [timer, prevous,context,param] = [null, 0, null,null]
    options = {
        leading : true,
        trailing : true,
        ...options
    }
    let later = function(){
        prevous = options.leading === false ? 0 : Date.now()
        timer = null
        func.apply(context,param)
    }

    let returnRes = function(){
        let now = Date.now()
        context = this
        param = arguments
        if(!prevous && options.leading === false) prevous = now
        let remaining = wait - (now - prevous)
        if(remaining <= 0 || remaining > wait){
            if(timer){
                clearTimeout(timer)
                timer = null
            }
            prevous = now
            func.apply(context,param)
        } else if(!timer && options.trailing !== false){
            timer = setTimeout(later, remaining)
        }
    }

    returnRes.cancel = function(){
        prevous = 0
        clearTimeout(timer)
        timer = null

    }
    return returnRes
}

const container = document.getElementById('container')
let counter = 0
function handleMove(e){
    counter++
    console.log('e is',e)
    console.log('this is',this)
    console.log('counter is',counter)
}

const throttleHandle = MyThrottle4(handleMove,2000,{
    trailing : false
})
container.addEventListener('mousemove',throttleHandle)
container.addEventListener('click', throttleHandle.cancel)
module.exports = {
    MyThrottle4
}