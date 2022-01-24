/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let reg = /[0-9a-z]/i;
  if(s.length === 0) return true;
  let [i,j] = [0, s.length-1];
  while(i<j){
    if(s[i]===' '){
      i++;
    } else if(s[j] === ' '){
      j--;
    } else {
      if(!reg.test(s[i]) || !reg.test(s[i]) || s[i].toLocaleLowerCase()!==s[j].toLocaleLowerCase()){
        return false
      } else {
        i++;
        j--;
      }
    }
  }
  return true
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))
// @lc code=end

