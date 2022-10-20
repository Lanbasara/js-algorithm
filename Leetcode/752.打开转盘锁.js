/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 *
 * https://leetcode.cn/problems/open-the-lock/description/
 *
 * algorithms
 * Medium (52.89%)
 * Likes:    526
 * Dislikes: 0
 * Total Accepted:    100.3K
 * Total Submissions: 189.7K
 * Testcase Example:  '["0201","0101","0102","1212","2002"]\n"0202"'
 *
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8',
 * '9' 。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
 * 
 * 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 * 
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 * 
 * 字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
 * 输出：6
 * 解释：
 * 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
 * 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
 * 因为当拨动到 "0102" 时这个锁就会被锁定。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: deadends = ["8888"], target = "0009"
 * 输出：1
 * 解释：把最后一位反向旋转一次即可 "0000" -> "0009"。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"],
 * target = "8888"
 * 输出：-1
 * 解释：无法旋转到目标数字且不被锁定。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= deadends.length <= 500
 * deadends[i].length == 4
 * target.length == 4
 * target 不在 deadends 之中
 * target 和 deadends[i] 仅由若干位数字组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 var openLock = function (deadends, target) {
    let step = 0;
    const deadSet = new Set(deadends);
    const visitedSet = new Set();

    const q = ["0000"];

    while (q.length) {
        const size = q.length;
        for (let i = 0; i < size; i++) {
            const node = q.shift();
            if (node == target) {
                return step;
            }
            if (visitedSet.has(node)) {
                continue;
            }
            if (deadSet.has(node)) {
                continue;
            }
            visitedSet.add(node);

            for (let j = 0; j < node.length; j++) {
                const num = node[j] - '0';
                const up = (num + 1) % 10;
                const down = (num + 9) % 10;
                q.push(node.substring(0, j) + up + node.substring(j + 1));
                q.push(node.substring(0, j) + down + node.substring(j + 1));
            }
        }
        step++;
    }
    return -1;
};
deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0202"
console.log(openLock(deadends, target))
// @lc code=end

