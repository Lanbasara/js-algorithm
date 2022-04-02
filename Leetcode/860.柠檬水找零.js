/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let map = {
    5: 0,
    10: 0,
    20: 0,
  };
  for (let bill of bills) {
    let charge = bill - 5;
    console.log(map);
    switch (charge) {
      case 5:
        if (map['5'] >= 1) {
          map['5']--;
          break;
        }
        return false;
      case 15:
        if (map['5'] >= 3) {
          map['5'] -= 3;
          break;
        } else {
          if (map['10'] >= 1 && map['5'] >= 1) {
            map['10']--;
            map['5']--;
            break;
          }
        }
        return false;
      default:
        break;
    }
    map[`${bill}`]++;
  }
  return true;
};
console.log(lemonadeChange([5, 5, 5, 10, 20]));
// @lc code=end
