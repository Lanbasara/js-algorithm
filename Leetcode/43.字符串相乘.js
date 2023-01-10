/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if([num1,num2].includes('0')) return '0'
    let res = new Array(num1.length+num2.length).fill(0)
    for(let i=num1.length-1;i>=0;i--){
        for(let j=num2.length-1;j>=0;j--){
            let p1 = i+j, p2 = i+j+1
            let sum = num1[i] * num2[j] + res[p2]
            res[p1] += Math.floor(sum  / 10)
            res[p2] = sum % 10
        }
    }
    if(res[0] === 0){
        res.shift()
    }
    return res.join('')
};
num1 = "123", num2 = "456"
console.log(multiply(num1,num2))
// @lc code=end

