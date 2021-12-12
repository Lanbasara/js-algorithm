/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */

 var findRadius = function(houses, heaters) {
    let l = 0, r = 1 * Math.pow(10,9)
    
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    
    const helpers = (radius) => {
      let index = 0;
      const n = houses.length;
      
      for (let i = 0; i < heaters.length; i++) {
        const heater = heaters[i];
        let l = heater - radius,
            r = heater + radius;
        while (index < n && houses[index] >= l && houses[index] <= r) {
          index++;
        }
        if (index === n) return true;
      }
      
      return false;
    }
    
    while (l <= r) {
      let mid = l + ((r - l) >> 1);
      const canCover = helpers(mid);
      if (canCover) {
        r = mid-1;
      } else {
        l = mid + 1;
      }
    }
    
    return l;
  }
console.log(findRadius([1,2,3],[2]))
// @lc code=end

