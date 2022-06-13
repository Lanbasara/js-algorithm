/**
 * 归并排序
 * 以数组为例子
 */
function mergeSort(array) {
  function merge(array, start, end){
    if(start === end) return
    let mid = Math.floor(start+(end-start)/2)
    merge(array, start, mid)
    merge(array, mid+1, end)

    let p1 = start
    let p2 = mid + 1
    let help = []
    let i = 0;
    while(p1 <= mid && p2 <=end){
      help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++]
    }

    while(p1 <= mid ){
      help[i++] =  array[p1++] 
    }

    while(p2 <= end ){
      help[i++] =  array[p2++] 
    }

    for(let j=0;j<help.length;j++){
      array[start+j] = help[j]
    }
  }

  merge(array, 0, array.length-1)
  return array
}
console.log(mergeSort([1, 5, 2, 4, 2]));


module.exports = {
  mergeSort
}