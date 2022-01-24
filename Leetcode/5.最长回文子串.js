/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let [left,right] = [0,1];
  let map = new Map()
  function helper(left,right){
    if(map.has(JSON.stringify([left,right]))){
      console.log('sssss')
      return map.get(JSON.stringify([left,right]))
    } else {
      if(left === right) {
        map.set(JSON.stringify([left,right]),true)
        return true
      }
    if(s[left] !== s[right]) {
        map.set(JSON.stringify([left,right]),false)
        return false
      }
    if(left+1 === right) {
        map.set(JSON.stringify([left,right]),true)
        return true
      }
    return helper(left+1, right-1, map)
    }
    
  }

  for(let i=0;i<s.length-1;i++){
    for(let j=s.length-1;j>i;j--){
      if(helper(i,j)){
        if(j-i+1 > right - left){
          [left,right] = [i,j+1]
        }
      }
    }
  }
  return s.slice(left,right)
};
console.log(longestPalindrome("babad"))

// @lc code=end

