/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 *
 * https://leetcode.cn/problems/long-pressed-name/description/
 *
 * algorithms
 * Easy (38.27%)
 * Likes:    234
 * Dislikes: 0
 * Total Accepted:    56.3K
 * Total Submissions: 147K
 * Testcase Example:  '"alex"\n"aaleex"'
 *
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 * 
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：name = "alex", typed = "aaleex"
 * 输出：true
 * 解释：'alex' 中的 'a' 和 'e' 被长按。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：name = "saeed", typed = "ssaaedd"
 * 输出：false
 * 解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= name.length, typed.length <= 1000
 * name 和 typed 的字符都是小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let [l,r] = [0,0]

    while(l<name.length&&r<typed.length){
        if(name[l] === typed[r]){
            l++
            r++
        } else {
            while(r<typed.length && typed[r]===typed[r-1])r++
            if(name[l]!==typed[r]) return false
        }
    }

    if(l===name.length && r!==typed.length){
        for(let i=r;i<typed.length;i++){
            if(typed[i]!==typed[i-1]){
                return false
            }
        }
    }

    if(r === typed.length && l!==name.length){
        return false
    }


    return true
};
// @lc code=end

