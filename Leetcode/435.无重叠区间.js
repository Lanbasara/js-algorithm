/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })
    let res = 0;
    let stack = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < stack[stack.length - 1][1]) {
            res++
            stack.push([Math.min(intervals[i][0], intervals[i - 1][0]), Math.max(intervals[i][1], intervals[i - 1][1])])
        } else {
            stack.push(intervals[i])
        }
    }
    return res
};
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))
// @lc code=end

