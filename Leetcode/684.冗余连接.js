/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 *
 * https://leetcode.cn/problems/redundant-connection/description/
 *
 * algorithms
 * Medium (67.18%)
 * Likes:    482
 * Dislikes: 0
 * Total Accepted:    78.1K
 * Total Submissions: 116.2K
 * Testcase Example:  '[[1,2],[1,3],[2,3]]'
 *
 * 树可以看成是一个连通且 无环 的 无向 图。
 * 
 * 给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n
 * 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai
 * 和 bi 之间存在一条边。
 * 
 * 请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的边。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入: edges = [[1,2], [1,3], [2,3]]
 * 输出: [2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入: edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]
 * 输出: [1,4]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * n == edges.length
 * 3 
 * edges[i].length == 2
 * 1 
 * ai != bi
 * edges 中无重复元素
 * 给定的图是连通的 
 * 
 * 
 */

// @lc code=start
class DisjointSet {
    constructor(count) {
      this.parent = new Array(count);
      this.rank = new Array(count);
      for (let i = 0; i < count; i++) {
        this.parent[i] = i;
        this.rank[i] = 1;
      }
    }
    find(p) {
      while (p !== this.parent[p]) {
        // this.parent[p] = this.parent[this.parent[p]];
        p = this.parent[p];
      }
      return p;
    }
    isContact(p, q) {
      return this.find(p) === this.find(q);
    }
    union(p, q) {
      let i = this.find(p);
      let j = this.find(q);
      if (i === j) return;
      if (this.rank[i] < this.rank[j]) {
        this.parent[i] = j;
        this.rank[j] += 1;
      } else if (this.rank[i] > this.rank[j]) {
        this.parent[j] = i;
        this.rank[i] += 1;
      } else {
        this.parent[i] = j;
        this.rank[j] += 1;
      }
    }
  }
  
  /**
   * @param {number[][]} edges
   * @return {number[]}
   */
  var findRedundantConnection = function(edges) {
      // 并查集初始化
      let joint = new DisjointSet(edges.length)
      for(let i = 0; i < edges.length; i++){
          joint.parent[i] = i;
          joint.rank[i] = 1;
      }
      for(let i = 0; i < edges.length; i++){
          if(joint.isContact(edges[i][0], edges[i][1])) return edges[i];
          else joint.union(edges[i][0], edges[i][1]);
      }
      return null;
  };
 console.log(findRedundantConnection([[1,2], [1,3], [2,3]]))
// @lc code=end

