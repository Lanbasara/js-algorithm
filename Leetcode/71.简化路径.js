/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  path = path.replace(/(.*)\/$/, '$1');
  let stack = [];
  let reg = /\/[^/]+/g;
  while ((match = reg.exec(path))) {
    let partPath = match[0];
    if (partPath === '/..') {
      stack.pop();
    } else if (partPath === '/.') {
      continue;
    } else {
      stack.push(partPath);
    }
  }
  return stack.join('');
};
console.log(simplifyPath('/home/'));
// @lc code=end
