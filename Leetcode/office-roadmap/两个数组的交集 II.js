/**
 * 两个数组的交集 II
 * 给定两个数组，编写一个函数来计算它们的交集。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map = new Map()
  const res = []
  for(let i=0;i<nums1.length;i++){
    if(map.has(nums1[i])){
      map.set(nums1[i],map.get(nums1[i])+1)
    } else {
      map.set(nums1[i],1)
    }
  }
  for(let i=0;i<nums2.length;i++){
    if(map.has(nums2[i]) && map.get(nums2[i]) >0){
      res.push(nums2[i])
      map.set(nums2[i],map.get(nums2[i])-1)
    }
  }
  return res
};

const nums1 = [4,9,5], nums2 = [9,4,9,8,4]
console.log(intersect(nums1,nums2))