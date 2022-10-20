/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
//  var nthSuperUglyNumber = function(n, primes) {
//   let dp = new Array(n+1).fill(1)
//   dp[1] = 1;
//   let map = new Map();
//   primes.forEach(p => {
//       map.set(p,{
//           pointer : 0,
//       })
//   })
//  for(let i=2;i<=n;i++){
//       let min = Infinity;
//       // for(let [key, value] of map){
//       //     let tempValue = key * dp[map.get(key).pointer]
//       //     // console.log('key is',key,'tempValue is',tempValue)
//       //     min = Math.min(min, tempValue)
//       //     map.get(key).value = tempValue
//       // }
//       primes.forEach(p => {
//           // let tempValue = p * dp[map.get(p).pointer]
//           // // console.log('key is',key,'tempValue is',tempValue)
//           // min = Math.min(min, tempValue)
//           // map.get(p).value = tempValue
//           map.get(p).value = p * dp[map.get(p).pointer];
//             min = Math.min(min, p * dp[map.get(p).pointer])
//       })
//       dp[i] = min;
//       // for(let [key, value] of map){
//       //     if(map.get(key).value === dp[i]){
//       //         map.get(key).pointer++;
//       //     }
//       // }
//       for(let [key,value] of map){
//         if(dp[i] === map.get(key).value){
//             map.get(key).pointer++
//         }
//     }
//  }
//  console.log(dp)
//  return dp[n]
// };


var nthSuperUglyNumber = function(n, primes) {
  let dp = new Array(n+1).fill(0)
  dp[0] = 1
  let pointer = primes.map(() => 0)
  let min = Infinity
  for(let i=1;i<=n;i++){
      for(let i=0;i<primes.length;i++){
          console.log(primes[i] * dp[pointer[i]])
          min = Math.min(min, primes[i] * dp[pointer[i]])
      }
      dp[i] = min
      for(let i=0;i<primes.length;i++){
          if(primes[i] * dp[pointer[i]] === min){
              pointer[i]++
          }
      }
  }
  console.log(dp)
  return dp[n]
};
const n = 12, primes = [2,7,13,19]
console.log(nthSuperUglyNumber(12,primes))
// @lc code=end

