/**
 * 快速排序
 * 要点
 * 1. 以基准值为基准，不断地分成less 和 bigger。
 * 2. 基线条件是，数组为空或者只有一个元素，直接返回即可
 * 3. 生成less和more的时候，不要再加入基准值了，否则会死循环
 */
function quickSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let base = array[0];
    let less = [];
    let bigger = [];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > base) {
        bigger.push(array[i]);
      } else {
        less.push(array[i]);
      }
    }
    return quickSort(less).concat(base, quickSort(bigger));
  }
}
module.exports = quickSort;
