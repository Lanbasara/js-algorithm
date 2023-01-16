// 输入: [7,5,6,4]
// 输出: 5
var reversePairs = function(nums) {
    if(!nums.length) return 0
    let res = 0
    function merge(start,end){
        if(start === end) return
        let mid = Math.floor(start + (end - start)/2)
        merge(start,mid)
        merge(mid+1,end)
        let p1 = start, p2 = mid+1
        let help = []
        let i = 0

        while(p1 <= mid && p2 <= end){
            if(nums[p2]<nums[p1]){
                res += mid + 1 - p1
                help[i++] = nums[p2++]
            } else {
                help[i++] = nums[p1++]
            }
        }

        while(p1 <= mid){
            help[i++] = nums[p1++]
        }

        while(p2 <= end){
            help[i++] = nums[p2++]
        }

        for(let j=0;j<help.length;j++){
            nums[start+j] = help[j]
        }
    }

    merge(0,nums.length-1)
    return res
};
console.log(reversePairs([7,5,6,4]))