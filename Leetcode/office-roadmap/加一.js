/**
 * 加一
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字
 * 你可以假设除了整数 0 之外，这个整数不会以零开头
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function (digits) {
    for(let i=digits.length-1;i>=0;i--){
        digits[i]=digits[i]+1
        digits[i]=digits[i]%10
        if(digits[i]!==0){
            return digits
        }
    }
    digits.unshift(1)
    return digits
};
// const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
const digits = [4,9,9,8]
console.log(plusOne(digits))