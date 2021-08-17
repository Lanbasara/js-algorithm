const Trie = require('../../data-structure/trie');
test('字典树，测试', () => {
  const trie = new Trie();
  trie.insert('abc');
  trie.insert('abc');
  trie.insert('cdb');
  trie.insert('efd');
  trie.insert('efd');
  expect(trie.search('abc')).toBe(2);
  expect(trie.search('cdb')).toBe(1);
  trie.delete('abc');
  expect(trie.search('abc')).toBe(1);
});
