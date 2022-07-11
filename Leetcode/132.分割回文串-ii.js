/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 *
 * https://leetcode.cn/problems/palindrome-partitioning-ii/description/
 *
 * algorithms
 * Hard (49.64%)
 * Likes:    591
 * Dislikes: 0
 * Total Accepted:    62.1K
 * Total Submissions: 125K
 * Testcase Example:  '"aab"'
 *
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文。
 * 
 * 返回符合要求的 最少分割次数 。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "aab"
 * 输出：1
 * 解释：只需一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a"
 * 输出：0
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "ab"
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由小写英文字母组成
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var minCut = function(s) {
    // step1 : 统计palindrome情况
    let palindromeDp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false))
    for(let i=s.length-1;i>=0;i--){
        for(let j=i;j<s.length;j++){
            if(i === j){
                palindromeDp[i][j] = true
            } else if(i+1 === j){
                palindromeDp[i][j] = s[i] === s[j]
            } else {
                palindromeDp[i][j] = palindromeDp[i+1][j-1] && (s[i] === s[j]) 
            }
        }
    }

    // step2 : dp[i] : s[0,i]子串， 分割为回文串，最少需要多少刀
    // j < i.  当s[j+1,i]是回文串的时候， dp[i] = Math.max(dp[i],dp[i]+1)
    // 特殊case: 当s[0,i]本身就是回文的时候，dp[i] = 0， 不要再进行累加
    let dp = new Array(s.length).fill(Infinity)
    dp[0] = 0
    for(let i=0;i<s.length;i++){
        if(palindromeDp[0][i]){ // 判断是不是回文子串
            dp[i] = 0;
            continue;
        }
        for(let j=0;j<i;j++){
            if(palindromeDp[j+1][i]){
                dp[i] = Math.min(dp[i],dp[j]+1)
            }
        }
    }

    return dp[s.length-1]
};
// @lc code=end

