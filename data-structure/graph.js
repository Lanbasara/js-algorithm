/**
 * 有向图
 * 先基于《算法图解》来实现一版粗糙的
 * 并实现BFS
 */
class Graph {
  constructor() {
    this.global = {};
  }
  addRelation(from, to) {
    if (!this.global[`${from}`]) {
      this.global[`${from}`] = to;
    }
  }
  breadthFirstSearch(from) {
    const res = [];
    let q = [];
    q.push(this.global[`${from}`]);
    while (q.length) {
      let target = q.shift();
      target.map((item) => {
        res.push(item);
        if (this.global[`${item}`]) {
          q.push(this.global[`${item}`]);
        }
      });
    }
    return res;
  }
}

const graph = new Graph();
graph.addRelation('you', ['bob', 'claire', 'alice']);
graph.addRelation('bob', ['anuj']);
graph.addRelation('claire', ['thom', 'jonny']);
graph.addRelation('alice', ['peggy']);
debugger;
console.log(graph);
console.log(graph.breadthFirstSearch('you'));
