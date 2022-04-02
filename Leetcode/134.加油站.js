/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let res = false;
  let index = -1;
  let j = 0;
  for (let i = 0; i < gas.length; i++) {
    let tank = 0;
    let len = gas.length;
    j = i;
    while (len--) {
      let index = j % gas.length;
      let temp = tank + gas[index] - cost[index];
      if (temp < 0) {
        res = false;
        break;
      } else {
        tank = temp;
      }
      j++;
    }
    if (j === i + gas.length) {
      res = true;
    }
    if (res) {
      index = i;
    }
  }
  return index;
};
let gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
// @lc code=end
