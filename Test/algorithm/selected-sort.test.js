const { selectedSort, inplaceSelectedSort } = require('../../algorithm/selected-sort.js');
test('选择排序，测试', () => {
  const test1 = [-1, 2, 3, -10, 3, 8, 9, 4, 1, 0, 0, 0, 0, 1, 1, 1];
  const test2 = [-1, 2, 3, -10, 3, 8, 9, 4, 1, 0, 0, 0, 0, 1, 1, 1];
  expect(selectedSort(test1)).toEqual([-10, -1, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 4, 8, 9]);
  expect(inplaceSelectedSort(test2)).toEqual([-10, -1, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 4, 8, 9]);
});
