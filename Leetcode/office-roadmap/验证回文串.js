/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0,right=s.length-1
  while(left<=right){
    if(!/[a-zA-Z0-9]/.test(s[left])){
      left++;
      continue;
    }
    if(!/[a-zA-Z0-9]/.test(s[right])){
      right--
      continue;
    }
    if(s[left].toLocaleLowerCase()!==s[right].toLocaleLowerCase()){
      return false
    }
    left++;
    right--;
  }
  return true
};

const a = "A man, a plan, a canal: Panama"
const b = "race a car"
const c = "0P"
console.log(isPalindrome(a))
console.log(isPalindrome(b))
console.log(isPalindrome(c))