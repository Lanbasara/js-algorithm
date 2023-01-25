const {partial} = require('../../js-related/my-partial');

describe('my-partial test', () => {
  it('partial', () => {
    var subtract = function (a, b) {
      return b - a;
    };
    subFrom20 = partial(subtract, "_", 20);
    expect(subFrom20(5)).toBe(15);
  });
});
