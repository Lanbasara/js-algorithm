/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let res = 0
    let sign = 1
    let valStack = []
    let signStack = []
    let isNumber = (val) => val >= '0' && val <= '9'

    for(let i=0;i<s.length;i++){
        let temp = s[i]
        switch(temp){
            case "+":
                sign = 1;
                break
            case "-":
                sign = -1;
                break
            case "(":
                valStack.push(res)
                signStack.push(sign)
                res = 0
                sign = 1
                break;
            case ")":
                res =  res * signStack.pop() + valStack.pop()
                break;
            default:
                if(isNumber(temp)){
                    let n = temp
                    while(isNumber(s[i+1])){
                        n = n + s[i+1]
                        i++
                    }
                    res += sign * +n
                }
        }
    }

    return res
};
calculate("(1+(4+5+2)-3)+(6+8)")
// @lc code=end

