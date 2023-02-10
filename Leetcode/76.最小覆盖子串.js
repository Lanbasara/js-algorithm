/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const targetWindow = {}
    for(let i=0;i<t.length;i++){
        targetWindow[t[i]] = (targetWindow[t[i]]||0)+1
    }
    const window = {}
    let count = 0
    let len = Infinity
    let start=0
    let [l,r] = [0,0]
    while(r<s.length){
        window[s[r]] = (window[s[r]]||0)+1
        if(window[s[r]] === targetWindow[s[r]]){
            count++
        }

        while(count === Object.keys(targetWindow).length){
            if(r-l+1<len){
                len = r - l +1
                start = l
            }
            if(targetWindow[s[l]]){
                window[s[l]] = window[s[l]] === 0 ? 0 : window[s[l]]-1
                if(window[s[l]] < targetWindow[s[l]]){
                    count--
                }
            }
            l++
        }
        r++
    }

    return len === Infinity ? "" : s.substr(start,len)

};

minWindow("aaaaaaaaaaaabbbbbcdd","abcdd")
// @lc code=end

