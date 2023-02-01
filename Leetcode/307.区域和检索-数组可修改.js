/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * @param {number[]} nums
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

var NumArray = function(nums) {
    this.tree = new BIT(nums)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.tree.update(index,val)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.tree.sumRange(left,right)
};

const tree = new NumArray([1, 3, 5])
console.log(tree.sumRange(0,2))
tree.update(1,2)
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

