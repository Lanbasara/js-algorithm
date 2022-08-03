const { type, isPlainObject, isEmptyObject } = require("../../js-related/type")

describe('type', () => {
    it('primary type', () => {
        expect(type(true)).toBe('boolean')
        expect(type('111')).toBe('string')
        expect(type(111)).toBe('number')
    })

    it('object', () => {
        expect(type({})).toBe('object')
    })

    it('function', () => {
        expect(type(() => { })).toBe('function')
    })

    it('other objects', () => {
        expect(type([1, 2, 3])).toBe('array')
        expect(type(new RegExp('ssss'))).toBe('regexp')
        expect(type(new Date())).toBe('date')
        expect(type(new Error('s'))).toBe('error')
        expect(type(null)).toBe('null')
        expect(type(undefined)).toBe('undefined')
    })

})

describe('isPlainObject', () => {
    it('{}', () => {
        expect(isPlainObject({})).toBe(true)
    })
    it('new Object', () => {
        expect(isPlainObject(new Object)).toBe(true)
    })
    it('Object.create(null)', () => {
        expect(isPlainObject(Object.create(null))).toBe(true)
    })
    it('Object.assgin', () => {
        expect(isPlainObject(Object.assign({ a: 1 }, { b: 2 }))).toBe(true)
    })
    it('named', () => {
        function Person(name) {
            this.name = name;
        }
        expect(isPlainObject(new Person('yayu'))).toBe(false)
    })

    it('create({})', () => {
        expect(isPlainObject(Object.create({}))).toBe(false)
    })
})

describe('isEmptyObject', () => {
    it('isEmptyObject' ,() => {
        expect(isEmptyObject({})).toBe(true)
        expect(isEmptyObject([])).toBe(true)
        expect(isEmptyObject(null)).toBe(true)
        expect(isEmptyObject(undefined)).toBe(true)
        expect(isEmptyObject(1)).toBe(true)
        expect(isEmptyObject('')).toBe(true)
        expect(isEmptyObject(true)).toBe(true)
    })
})