/**
 * 归并排序
 * 以数组为例子
 */
function mergeSort(array) {
  function sort(array, start, end) {
    if (start === end) return;
    let mid = Math.floor(start + (end - start) / 2);
    sort(array, start, mid);
    sort(array, mid + 1, end);
    let i = 0;
    let p1 = start;
    let p2 = mid + 1;
    let help = [];
    while (p1 <= mid && p2 <= end) {
      help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++];
    }
    while (p1 <= mid) {
      help[i++] = array[p1++];
    }
    while (p2 <= end) {
      help[i++] = array[p2++];
    }
    for (let i = 0; i < help.length; i++) {
      array[start + i] = help[i];
    }
    return array;
  }
  sort(array, 0, array.length - 1);
  return array;
}

let a = [3, 2, 6, 5, 7, 1, 0, -10];
console.log(mergeSort(a));
console.log(a);
