/*
 * @lc app=leetcode.cn id=1488 lang=javascript
 *
 * [1488] 避免洪水泛滥
 */

// @lc code=start
 var avoidFlood = function(rains) {
  let sunnyDays = [];
  let res = new Array(rains.length).fill(-1)
  let map = new Map();
  for(let i=0;i<rains.length;i++){
      if(rains[i]!==0){
          if(map.has(rains[i])){
            if(sunnyDays.length === 0){
              return []
            } else {
              let temp = sunnyDays.find(item => item > map.get(rains[i]))
              if(temp === undefined){
                  return []
              }
              res[temp] = rains[i];
              let tempIndex = sunnyDays.indexOf(temp)
              sunnyDays.splice(tempIndex,1)
              map.set(rains[i],i)
            }
          } else {
              map.set(rains[i],i)
          }
      } else {
          sunnyDays.push(i)
      }
  }
  if(sunnyDays.length){
    for(let i=0;i<sunnyDays.length;i++){
      res[sunnyDays[i]] = 1
    }
  }
  return res
};
// @lc code=end

