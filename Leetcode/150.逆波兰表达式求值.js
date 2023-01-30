/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    const caculateMap = new Map([
        ["+", (a,b) => a+b],
        ["-", (a,b) => a-b],
        ["*", (a,b) => a*b],
        ["/", (a,b) => parseInt(a/b)],
    ])
    for(let token of tokens){
        if(caculateMap.has(token)){
            let b = stack.pop()
            let a = stack.pop()
            stack.push(caculateMap.get(token)(a,b))
        } else {
            stack.push(+token)
        }
    }

    return stack[0]
};
// @lc code=end

