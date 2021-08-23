/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  if(x>Math.pow(2,31)-1 || x < Math.pow(-2,31)){
    return 0
  }
  let target = String(x).split('')
  let left = 0,right = target.length-1
  while(left<right){
    if(target[left] === '-'){
      left++;
      continue
    }
    [target[left],target[right]] = [target[right],target[left]]
    left++;
    right--;
  }
  return (Number(target.join("")) > (Math.pow(2,31)-1) || Number(target.join("")) <Math.pow(-2,31)  ) ? 0 :Number(target.join("")) 
};

console.log(reverse(1534236469)) 