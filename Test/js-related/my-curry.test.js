const {curry}  = require('../../js-related/my-curry')

describe('my-curry',() => {
    const add = function(a,b,c){
        return a + b + c
    }
    it('zero init params', () => {
        const curryAdd = curry(add)
        expect(curryAdd(1)(2)(3)).toBe(6)
        expect(curryAdd(1)()(2)()(3)).toBe(6)
    })

    it('one init params', () => {
        const curryAdd1 = curry(add,1)
        expect(curryAdd1(2)(3)).toBe(6)
        expect(curryAdd1(2)()(3)).toBe(6)
    })
})