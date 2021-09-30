/**
 * 基础二分查找（数组）
 * 要点：
 * 1. 双指针
 * 2. 截止条件，是指针已经错位
 * 3. 指针的增减，都要越过mid
 * 4. 计算mid的时候，向下取整
 */
function BasicBinarySearch(origin, target) {
  // 要点1
  let left = 0,
    mid,
    right = origin.length - 1;
  // 要点2
  while (left <= right) {
    // 要点4
    mid = Math.floor((left + right) / 2);
    if (origin[mid] === target) {
      return mid;
    } else if (origin[mid] > target) {
      // 要点3
      right = mid - 1;
    } else {
      // 要点3
      left = mid + 1;
    }
  }
  return null;
}

// 寻找上限
function BinarySearchUpper(array) {
  let low = 0;
  let high = 7;
  while (low < high) {
    let mid = Math.ceil(low + (high - low) / 2);
    console.log(mid);
    if (array[mid]) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return array[low];
}

// 寻找下限
function BinarySearchLower(array) {
  let low = 0;
  let high = 7;
  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    console.log(mid);
    if (array[mid] == 0) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return array[high];
}

module.exports = BasicBinarySearch;
