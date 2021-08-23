/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  let reg = /^\s*((-?|\+?)\d+)/
  let res = 0
  if(reg.test(s)){
      res = Number(reg.exec(s)[1])
  }
  if(res>Math.pow(2,31)-1){
      res = Math.pow(2,31)-1;
  } else if(res < Math.pow(-2,31)){
      res = Math.pow(-2,31)
  }
  return res
};

const s1 = "42"
const s2 = "   -42"
const s3 = "4193 with words"
const s4 = "words and 987"
const s5 = "-91283472332"
const s6 = "-91283472332"
const s7 = "+1"

console.log(myAtoi(s1))
console.log(myAtoi(s2))
console.log(myAtoi(s3))
console.log(myAtoi(s4))
console.log(myAtoi(s5))
console.log(myAtoi(s7))