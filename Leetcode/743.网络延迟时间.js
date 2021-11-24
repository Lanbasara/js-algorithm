/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var networkDelayTime = function(times, n, k) {
    const INF = Number.MAX_SAFE_INTEGER;
    const g = new Array(n).fill(INF).map(() => new Array(n).fill(INF));
    for (const t of times) {
        const x = t[0] - 1, y = t[1] - 1;
        g[x][y] = t[2];
    }
    console.log(g)
    const dist = new Array(n).fill(INF);
    dist[k - 1] = 0;
    const used = new Array(n).fill(false);
    for (let i = 0; i < n; ++i) {
        let x = -1;
        for (let y = 0; y < n; ++y) {
            if (!used[y] && (x === -1 || dist[y] < dist[x])) {
                x = y;
            }
        }
        used[x] = true;
        for (let y = 0; y < n; ++y) {
            dist[y] = Math.min(dist[y], dist[x] + g[x][y]);
        }
    }

    let ans = Math.max(...dist);
    return ans === INF ? -1 : ans;
};
const times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
console.log(networkDelayTime(times,n,k))
// @lc code=end

