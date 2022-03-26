/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let res = [];
  // step1 : 构建图
  let graph = {};
  for (let ticket of tickets) {
    let [from, to] = ticket;
    graph[from] = graph[from] || [];
    graph[from].push(to);
  }
  // 每个边按照字典序排
  for (let key in graph) {
    graph[key].sort();
  }

  function dfs(start) {
    const nextDirs = graph[start];
    while (nextDirs && nextDirs.length) {
      let next = nextDirs.shift();
      dfs(next);
    }
    res.unshift(start);
  }
  dfs('JFK');

  return res;
};

console.log(
  findItinerary([
    ['JFK', 'KUL'],
    ['JFK', 'NRT'],
    ['NRT', 'JFK'],
  ])
);
// @lc code=end
