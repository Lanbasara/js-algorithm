// var hammingWeight = function(n) {
//   let num = Number(`0b${n}`)
//   let res = 0;
//   for(let i=0;i<n;i++){
//       if(((num >> i) & 1) === 1 ){
//           res++;
//       }
//   }
//   return res
// };
var hammingWeight = function(n) {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
      if ((n & (1 << i)) !== 0) {
          ret++;
      }
  }
  return ret;
};

console.log(hammingWeight(00000000000000000000000000001011))