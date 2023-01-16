const { myCurry } = require('../../js-related/my-curry');

describe('my-curry test', () => {
  function add(a, b, c) {
    return a + b + c;
  }
  let addCurry = myCurry(add);

  it('add curry test', () => {
    expect(addCurry(1)()()(2, 3)).toBe(6);
  });
});
