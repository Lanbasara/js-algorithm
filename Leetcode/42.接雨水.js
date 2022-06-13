/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let res = 0;
    let stack = [0]

    for (let i = 1; i < height.length; i++) {
        if (height[i] < height[stack[stack.length - 1]]) {
            stack.push(i)
        } else if (height[i] === height[stack[stack.length - 1]]) {
            stack.pop()
            stack.push(i)
        } else {
            while (stack.length !== 0 && height[i] > height[stack[stack.length - 1]]) {
                let mid = height[stack.pop()] || 0
                if (stack.length !== 0) {
                    let h = Math.min(height[i], height[stack[stack.length-1]]) - mid
                    let width = i - 1 - stack[stack.length-1]
                    res += Math.max(0, h * width)
                }
            }
            stack.push(i)

        }
    }

    return res
};
console.log(trap([4, 2, 0, 3, 2, 5]))
// @lc code=end

