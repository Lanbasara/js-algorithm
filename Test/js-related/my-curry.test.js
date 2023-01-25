const { curry } = require('../../js-related/my-curry');


describe('my-curry test', () => {
  it('1. add curry test', () => {
    function add(a, b, c) {
      return a + b + c;
    }
    let addCurry = curry(add);
    expect(addCurry(1)()()(2, 3)).toBe(6);
  });

  it('2. add curry test with default params', () => {
    function add(a, b, c) {
      return a + b + c;
    }
    let addCurry = curry(add, [1]);
    expect(addCurry()()()(2, 3)).toBe(6);
  });

  it('2. add curry test with placeholder and no default params', () => {
    var fn = curry(function (a, b, c, d, e) {
      return [a, b, c, d, e];
    });

    expect(fn("_", 2, 3, 4, 5)()(1)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(1, 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(fn('_', 2, 3, 4, 5)(1)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(1, '_', 3, 4, 5)(2)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(1, '_', 3)('_', 4)(2)(5)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(1, '_', '_', 4)('_', 3)(2)(5)).toEqual([1, 2, 3, 4, 5]);
    expect(fn('_', 2)('_', '_', 4)(1)(3)(5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('2. add curry test with placeholder and default params', () => {
    var fn = curry(
      function (a, b, c, d, e) {
        return [a, b, c, d, e];
      },
      [1]
    );

    expect(fn(2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(2, 3, "_")()(4)(5)).toEqual([1, 2, 3, 4, 5]);
    expect(fn('_', 3, 4, 5)(2)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(2, '_', 4, 5)(3)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(2, '_', 4)('_', 5)(3)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(2, '_', '_', 5)('_', 4)(3)).toEqual([1, 2, 3, 4, 5]);
    expect(fn('_')('_', '_', 4)(2,3)(5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('2. add curry test with placeholder and default params 2', () => {
    var fn = curry(
      function (a, b, c, d, e) {
        return [a, b, c, d, e];
      },
      [1, 2]
    );

    expect(fn(3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(fn('_', 4, 5)(3)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(3, '_', 5)(4)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(3, '_', '_')('_', 5)(4)).toEqual([1, 2, 3, 4, 5]);
    expect(fn(3)('_', '_')(4, '_')(5)).toEqual([1, 2, 3, 4, 5]);
  });
});
