/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands1 = function (grid) {
  let res = 0;

  function dfs(x, y, grid) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] === '0') return;
    grid[i][j] = '0';
    dfs(x - 1, y, grid);
    dfs(x + 1, y, grid);
    dfs(x, y - 1, grid);
    dfs(x, y + 1, grid);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        res++;
        // grid[i][j] = '0';
        dfs(i, j, grid);
      }
    }
  }

  return res;
};

class DisJoint {
  constructor(len) {
    this.count = len;
    this.parent = new Array(len + 1);
    for (let i = 0; i < len; i++) {
      this.parent[i] = i;
    }
    this.parent[len] = -1;
  }
  #find(p) {
    while (p !== this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }
  isConnet(p, q) {
    return this.#find(p) === this.#find(q);
  }
  union(from, to) {
    let u = this.#find(from);
    let v = this.#find(to);
    if (u === v) return;
    this.parent[to] = from;
    this.count--;
  }
  get getCount() {
    return this.count;
  }
}
var numIslands2 = function (grid) {
  let len = grid.length * grid[0].length;
  let n = grid[0].length;
  let set = new DisJoint(len);
  let dirx = [-1, 1, 0, 0];
  let diry = [0, 0, -1, 1];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '0') {
        set.union(len, n * i + j);
      } else if (grid[i][j] === '1') {
        for (let k = 0; k < 4; k++) {
          let x = i + dirx[k];
          let y = j + diry[k];
          if (x < 0 || y < 0 || x >= grid.length || y >= grid[x].length || grid[x][y] == 0) continue;
          if (grid[x][y] === '1') {
            set.union(n * i + j, n * x + y);
          }
        }
      }
    }
  }

  return set.getCount;
};
grid = [
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1'],
];
console.log(numIslands2(grid));
// @lc code=end
