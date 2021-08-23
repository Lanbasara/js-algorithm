/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map()
  let target;
  for(let i=0;i<s.length;i++){
    if(map.has(s[i])){
      map.set(s[i],map.get(s[i])+1)
    } else {
      map.set(s[i],1)
    }
  }
  for(const [key,value] of map){
    if(value === 1){
      target = key
      break;
    }
  }
  return s.indexOf(target)
};

const s = "leetcode"
// 返回 0

const s2 = "loveleetcode"
// 返回 2

console.log(firstUniqChar(s2))