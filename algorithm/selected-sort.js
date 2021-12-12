/**
 * 选择排序
 * 规则: 最基础的排序方法，每次遍历清单，找到当前的最值，然后插入新的清单中
 * 要点
 * 1. 创建已经寻找最值index的函数
 * 2. 使用这个函数，遍历目标清单，一次次找出最值，添加到新的清单中，直到原清单为空
 * 时间复杂度: O(n^2)
 *
 * 可以进一步优化为原地算法
 * 要点
 * 1. 每次交换最值与外层的当前值，使得外层遍历之前的清单都是有序的
 * 2. 内层循环的任务是，找到《未排序的部分，即内层循环+1之后的》的最小值
 * 3. 因此，外层循环只剩下一个的时候，就不需要排序了。因此外层循环的截止条件为length-1
 */

// 以升序为例
function selectedSort(origin) {
  const res = [];
  function findMin(array) {
    let minIndex = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
  }
  while (origin.length > 0) {
    let minIndex = findMin(origin);
    res.push(origin[minIndex]);
    origin.splice(minIndex, 1);
  }

  return res;
}

// 优化为原地算法，节省空间
function inplaceSelectedSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      minIndex = array[j] < array[minIndex] ? j : minIndex;
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

module.exports = { selectedSort, inplaceSelectedSort };
