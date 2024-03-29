/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 *
 * https://leetcode.cn/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (59.33%)
 * Likes:    327
 * Dislikes: 0
 * Total Accepted:    130.1K
 * Total Submissions: 219.2K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
 * 
 * 
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abcdefg", k = 2
 * 输出："bacdfeg"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abcd", k = 2
 * 输出："bacd"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅由小写英文组成
 * 1 <= k <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    let arr = s.split('')
    for(let i=0;i<s.length;i+=2*k){
        let [l,r] = [i, i+k-1 >= s.length ? s.length-1:i+k-1]
        while(l<r){
            [arr[l],arr[r]] = [arr[r],arr[l]]
            l++
            r--
        }
    }
    return arr.join('')
};

s = "abcdefg", k = 2
console.log(reverseStr(s,k))
// @lc code=end

