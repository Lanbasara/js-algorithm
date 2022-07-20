/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let scount = 0
    let tcount = 0
    let [sp,tp] = [s.length-1,t.length-1]
    while(true){
        while(sp >=0){
            if(s[sp]==='#') scount++
            else {
                if(scount===0) break;
                else scount--
            }
            sp--
        }

        while(tp >=0){
            if(t[tp]==='#') tcount++
            else {
                if(tcount===0) break;
                else {
                    tcount--
                }
            }
            tp--
        }
        if(sp === -1 && tp === -1) return true
        if(s[sp]!==t[tp]) return false
        sp--
        tp--
    }
};
let s = "ab#c", t = "ad#c"
backspaceCompare(s,t)
// @lc code=end

