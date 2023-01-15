var calculate = function (s) {
  const set = new Set(['+', '-']);
  const map = new Map([
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
  ]);
  function generatorArrFromStr(index) {
    let flag = '';
    let res = [];
    for (let i = index; i < s.length; i++) {
      let temp = s[i];
      // let recursiveRes = [];
      if (temp === '(') {
        let [recursiveRes, nextIndex] = generatorArrFromStr(i + 1);
        res.push(recursiveRes);
        if (set.has(flag)) {
          res.push(flag);
          flag = '';
        }
        i = nextIndex;
      } else if (temp === ')') {
        return [res, i];
      } else {
        if (temp === ' ') continue;
        if (set.has(temp)) {
          flag = temp;
        } else {
          if (set.has(flag)) {
            res.push(temp);
            res.push(flag);
            flag = '';
          } else {
            res.push(temp);
          }
        }
      }
    }
    if (set.has(flag)) {
      res.push(flag);
    }
    return res;
  }

  function getResultFromArr(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i];
      if (Array.isArray(temp)) {
        stack.push(getResultFromArr(temp));
      } else {
        if (set.has(temp)) {
          if (stack.length > 0) {
            let value2 = stack.pop();
            let value1 = stack.pop();
            stack.push(map.get(temp)(Number(value1), Number(value2)));
          }
        } else {
          stack.push(temp);
        }
      }
    }
    return stack.pop();
  }

  return getResultFromArr(generatorArrFromStr(0));
};

describe('测试', () => {
  it('1 + 1', () => {
    expect(calculate('1 + 1')).toBe(2);
  });
  it(' 2-1 + 2 ', () => {
    expect(calculate(' 2-1 + 2 ')).toBe(3);
  });
  it('(1+(4+5+2)-3)+(6+8)', () => {
    expect(calculate('(1+(4+5+2)-3)+(6+8)')).toBe(23);
  });
});
