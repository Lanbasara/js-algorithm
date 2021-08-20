/**
 * 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let set = new Set()
  for(let i=0;i<nums.length;i++){
      let originSize = set.size
      set.add(nums[i])
      let newSize = set.size
      if(originSize===newSize){
          set.has(nums[i]) && set.delete(nums[i])
      }
  }
  return Array.from(set)[0]
};
const a = [2,2,1]
const b = [4,1,2,1,2]
console.log(singleNumber(a))
console.log(singleNumber(b))