/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
    function counter(str){
        const res = {
            zero : 0,
            one : 0
        }

        for(let i=0;i<str.length;i++){
            if(str[i] === '1'){
                res.one++
            } else if(str[i] === '0'){
                res.zero++
            }
        }

        return res
    }

    const sources = strs.map(str => counter(str))

    const dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))

    for(let i=0;i<sources.length;i++){
        const temp = sources[i]
        for(let j=m;j>=temp.zero;j--){
            for(let k=n;k>=temp.one;k--){
                dp[j][k] = Math.max(dp[j][k], dp[j-temp.zero][k-temp.one]+1)
            }
        }
    }

    return dp[m][n]
};
// @lc code=end

