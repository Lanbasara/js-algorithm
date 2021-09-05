var merge = function(nums1, m, nums2, n) {
  if(!nums2.length) return nums1
  let target = m+n-1,i=m-1,j=n-1;
  if(i<0){
    nums1.splice(0,nums1.length,...nums2)
  }
  while(j>=0){
      if(i >=0 && nums1[i]>nums2[j]){
          nums1[target] = nums1[i]
          target--;
          i--;
      } else {
          nums1[target] = nums2[j];
          target--;
          j--;
      }
  }
  return nums1
};
const nums1 = [2,0], m = 1, nums2 = [1], n = 1
console.log(merge(nums1,m,nums2,n))
debugger