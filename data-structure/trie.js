/**
 * 字典树
 * 常用与字符串的匹配查找，以空间换时间，将搜索字符的复杂度控制在O(logn)
 * 特点
 * 1. 跟节点为空，每个节点有N个边，每条边代表一个字符
 * 2. 从跟节点开始，到任意子节点，经过的边连接起来就是该子节点所代表的字符串
 */
// 以英文为例，26个字母
class TrieNode {
  constructor() {
    // 出发的边
    this.path = 0;
    // 进入的边
    this.end = 0;
    this.next = new Array(26).fill(null);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  // 插入字符串
  insert(str) {
    if (!str) return;
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt() - 'a'.charCodeAt();
      if (!node.next[index]) {
        node.next[index] = new TrieNode();
      }
      node.path++;
      node = node.next[index];
    }
    node.end++;
  }
  // 搜索字符串出现的次数
  search(str) {
    if (!str) return;
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt() - 'a'.charCodeAt();
      if (!node.next[index]) {
        return 0;
      }
      node = node.next[index];
    }
    return node.end;
  }
  // 删除字符串
  delete(str) {
    if (!this.search(str)) return;
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let index = str[i].charCodeAt() - 'a'.charCodeAt();
      if (--node.next[index].path === 0) {
        node.next[index] = null;
        reurn;
      }
      node = node.next[index];
    }
    node.end--;
  }
}

const trie = new Trie();
trie.insert('abc');
trie.insert('cdb');
trie.insert('efd');
trie.insert('efd');
trie.insert('abc');
console.log(trie.search('abc'));
console.log(trie.search('efd'));
trie.delete('efd');
console.log(trie.search('efd'));
debugger;
