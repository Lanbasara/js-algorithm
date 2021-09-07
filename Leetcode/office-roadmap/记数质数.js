var countPrimes = function(n) {
  const result = new Array(n).fill(true);
  let count = 0;
  for(let i = 2;i < n;i++){
      if(result[i]) {
          count++;
          //质数的倍数都为合数
          for(let j = 2*i;j < n;j += i){
              result[j] = false;
          }
      }
  }
  return count;
};

console.log(countPrimes(8))