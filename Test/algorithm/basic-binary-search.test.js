// Jest 使用文档 https://jestjs.io/zh-Hans/docs/using-matchers
const BasicBinarySearch = require('../../algorithm/basic-binary-search')
test('二分查找法， 测试用例', () => {
    expect(BasicBinarySearch([1,3,5,7,9], 3)).toBe(1);
    expect(BasicBinarySearch([1,3,5,7,9], -1)).toBe(null);
    expect(BasicBinarySearch([1,3,5,7,9], 9)).toBe(4);
    expect(BasicBinarySearch([1,3,5,7,9], 1.1)).toBe(null);
});