/**
 * 树状数组 Binary indexed tree
 * 使用lowbit的方式，将数组数据分治存储的数据结构
 * 可以快速的在O(logn)查询数组的前缀和，并且在更新数组后，仍然可以O(logn)查询
 * lowbit : 数字二进制的最低位1所表示的数
 * 从数学上 lowbit(x) = x & (-x)
 */
class BIT {
  // 查询lowbit
  #lowbit(x) {
    return x & (-1 * x);
  }
  constructor(nums) {
    // 因为lowbit需要从下标1开始，开点需要在最前面留空0
    this.tree = [0].concat([...nums]);
    for (let i = 1; i <= nums.length; i++) {
      let j = i + this.#lowbit(i);
      if (j < this.tree.length) {
        this.tree[j] += this.tree[i];
      }
    }
  }
  prefixSumQuery(index) {
    let indexInBit = index + 1;
    let sum = 0;
    while (indexInBit > 0) {
      sum += this.tree[indexInBit];
      indexInBit -= this.#lowbit(indexInBit);
    }
    return sum;
  }
  sumRange(left, right) {
    return this.prefixSumQuery(right) - this.prefixSumQuery(left - 1);
  }
  add(index, delta) {
    let indexInBit = index+1
    while (indexInBit < this.tree.length) {
      this.tree[indexInBit] += delta;
      indexInBit += this.#lowbit(indexInBit);
    }
  }
  update(index, val) {
    let prev = this.sumRange(index, index);
    let delta = val - prev;
    this.add(index, delta);
  }
}

module.exports = {
  BIT,
};
