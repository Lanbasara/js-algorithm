/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let sign = 1,
    res = 0,
    valStack = [],
    signStack = [];
  let isNumber = (val) => val >= '0' && val <= '9';
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    let temp = s[i];
    switch (temp) {
      case '+':
        sign = 1;
        break;
      case '-':
        sign = -1;
        break;
      case '(':
        valStack.push(res);
        signStack.push(sign);
        res = 0;
        sign = 1;
        break;
      case ')':
        res = res * signStack.pop() + valStack.pop();
        break;
      default:
        if (isNumber(temp)) {
          let n = Number(temp);
          while (i + 1 && isNumber(s[i + 1])) {
            n += s[i + 1];
            i++;
          }
          res += sign * +n;
        }
    }
  }
  return res;
};

console.log(calculate('1 + 1'));
// @lc code=end
