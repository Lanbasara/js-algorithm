/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  function cut(n){
    let reg = /(\d)\1*/g
    let array = String(n).match(reg)
    let res = ''
    for(let i=0;i<array.length;i++){
      res += `${array[i].length}${array[i][0]}`
    }
    return res
  }
  if(n === 1){
    return 1
  }
  return cut(countAndSay(n-1))
};


console.log(countAndSay(5))

/**
1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1 
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
*/