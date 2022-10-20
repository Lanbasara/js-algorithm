/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode.cn/problems/add-strings/description/
 *
 * algorithms
 * Easy (54.99%)
 * Likes:    604
 * Dislikes: 0
 * Total Accepted:    223.7K
 * Total Submissions: 406.6K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 * 
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 * 
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= num1.length, num2.length <= 10^4
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let flag = 0
    let len1 = num1.length
    let len2 = num2.length
    let lenDiff = Math.abs(len1-len2)
    if(len1<len2){
        num1 = num1.padStart(num1.length+lenDiff,'0')
    } else {
        num2 = num2.padStart(num2.length+lenDiff,'0')
    }
    let index = num1.length-1
    let res = new Array(num1.length).fill(0)
    while(index >=0 ){
        let value1 = +num1[index]
        let value2 = +num2[index]
        let temp = value1 + value2 + flag
        res[index] = temp % 10
        flag = parseInt(temp/10)
        index--
    }
    if(flag >0){
        res.unshift(flag)
    }
    return res.join('')
};
num1 = "11", num2 = "123"
console.log(addStrings(num1,num2))
// @lc code=end

