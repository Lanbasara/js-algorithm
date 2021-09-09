var reverseBits = function (n) {
  let res = 0
  let i=0;
  while(i<32){
      res = res << 1
      res = res | (n & 1)
      n = n >>> 1;
      i++
  }
  res >>> 0
  return res
};

var reverseBits2 = function (n) {
  const arr = n.toString(2).padStart(32,0).split('').reverse().join('')
  return parseInt(arr,2)
};
reverseBits(4294967293)
