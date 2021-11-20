/*
 * @lc app=leetcode.cn id=1675 lang=javascript
 *
 * [1675] 数组的最小偏移量
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var minimumDeviation = function(nums) {
  nums.sort((a,b) => a-b)
  let res = []
  function addNums(num){
    let temp = [num]
    let even = num % 2 === 0;
    let target = num
    if(even){
      target /= 2;
      while(target %2!==0){
        temp.push(target)
        target /= 2
      }
    } else {
      temp.push(target*2)
    }
    return temp
  }
  nums.forEach(num => {
      let temp = [num];
      const temp = addNums(num)
      res.push(temp)
  })
  res.forEach(item => {
      item.sort((a,b) => a-b)
  })
  console.log(res)
};
const nums = [1,2,3,4];
console.log(minimumDeviation(nums))
// @lc code=end

