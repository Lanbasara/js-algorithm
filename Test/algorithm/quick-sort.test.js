const quickSort = require('../../algorithm/quick-sort');
test('快速排序，测试', () => {
  const a = [2, 1, 5, 2, 7, 6, -11, -122, 3, 2, 1];
  const b = [3, 2, 6, 1111, 2222, 3333, -23333, 0, 0, 0, 0, 1, 2, 3, 2, 6, 5];
  expect(quickSort(a)).toEqual([-122, -11, 1, 1, 2, 2, 2, 3, 5, 6, 7]);
  expect(quickSort(b)).toEqual([-23333, 0, 0, 0, 0, 1, 2, 2, 2, 3, 3, 5, 6, 6, 1111, 2222, 3333]);
});
