/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesV1 = function(nums){
  /**
   * 直接遍历法
   */
   let i = 1;
   while(i<nums.length){
     if(nums[i]===nums[i-1]){
       nums.splice(i,1)
       continue
     } else {
       i++
     }
  }
  return nums.length
}
var removeDuplicates = function(nums) {
  let left=0,right = 1;
  while(right <nums.length){
    if(nums[right] === nums[left]){
      right++;
    } else {
      left++
      nums[left] = nums[right]
      right++;
    }
  }
  nums.splice(left+1, nums.length-left)
  return nums
};
const a = [0,0,1,1,1,2,2,3,3,4]
// [0,1,2,3,4,2,2,3,3,4]
console.log(removeDuplicates(a))