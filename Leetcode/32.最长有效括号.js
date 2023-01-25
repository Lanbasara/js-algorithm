/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stack = [-1]
  let res = 0
  for(let i=0;i<s.length;i++){
      let char = s[i]
      if(char === '('){
          stack.push(i)
      } else {
          let temp = stack.pop()
          if(stack.length && s[temp] === '('){
              let length = i - stack[stack.length-1]
              res = Math.max(res, length)
          }
          stack.push(i)
      }
  }
  return res
};
console.log(longestValidParentheses(")()())"))
// @lc code=end

