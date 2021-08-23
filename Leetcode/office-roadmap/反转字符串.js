/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  s.reverse()
  return s  
};

const array = ["h","e","l","l","o"]
// ["o","l","l","e","h"]
console.log(reverseString(array))