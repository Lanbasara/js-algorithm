/**
 * 通过参数设置头尾
 */
function MyThrottle4(func, wait, options = {}) {
    let [timer, prevous, context, param] = [null, 0, null, null]
    options = {
        leading: true,
        trailing: true,
        ...options
    }
    let later = function () {
        prevous = options.leading === false ? 0 : Date.now()
        timer = null
        func.apply(context, param)
    }

    let returnRes = function () {
        let now = Date.now()
        context = this
        param = arguments
        if (!prevous && options.leading === false) prevous = now
        let remaining = wait - (now - prevous)
        if (remaining <= 0 || remaining > wait) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            prevous = now
            func.apply(context, param)
        } else if (!timer && options.trailing !== false) {
            timer = setTimeout(later, remaining)
        }
    }

    returnRes.cancel = function () {
        prevous = 0
        clearTimeout(timer)
        timer = null

    }
    return returnRes
}
describe('my-throttle', () => {
    it('test case', () => {
        jest.useFakeTimers()
        let a = 1
        let id = 0
        const mockFn = jest.fn(() => a++)

        const fn = MyThrottle4(mockFn, 1000)

        id = setInterval(() => {
            fn()
        }, 500)

        setTimeout(() => {
            clearInterval(id)
        },2000)
        jest.runAllTimers();
        expect(mockFn.mock.calls.length).toBe(3)
        expect(a).toBe(4)
    })
})