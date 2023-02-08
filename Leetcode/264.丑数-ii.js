/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = new Array(n).fill(0)
    dp[0] = 1
    p2 = p3 = p5 = 0
    for(let i=1;i<n;i++){
        let v2 = 2 * dp[p2]
        let v3 = 3 * dp[p3]
        let v5 = 5 * dp[p5]
        let min = Math.min(v2,v3,v5)
        if(min === v2) p2++
        if(min === v3) p3++
        if(min === v5) p5++
        dp[i] = min
    }

    return dp[dp.length-1]
};
// @lc code=end

