/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  console.log(x.toString(2))
  console.log(y.toString(2))
  var hammingWeight = function(n) {
    let count = 0;
    while(n){
        if(n & 1 === 1){
            count++
        }
        n = n >>> 1
    }
    return count
};
console.log(hammingWeight(x ^ y))
};

hammingDistance(3,1)