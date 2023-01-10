/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    s = ' ' + s
    const dp = new Array(s.length).fill(0)
    dp[0] = 1

    for(let i=1;i<s.length;i++){
        let tempValue = +s[i]
        let prevValue = +s[i-1]
        if(tempValue >= 1 && tempValue <= 9){
            dp[i] = dp[i-1]
        }
        let prevTwoNumber = prevValue * 10 + tempValue
        if(prevTwoNumber >= 10 && prevTwoNumber <= 26){
            dp[i] += dp[i-2]
        }
    }

    return dp[s.length-1]
};
console.log(numDecodings("226"))
// @lc code=end

