var romanToInt = function(s) {
  let map = new Map([
      ["I",1],
      ["V",5],
      ["X",10],
      ["L",50],
      ["C",100],
      ["D",500],
      ["M",1000]
  ])
  let res = 0;
  for(let i=0;i<s.length;i++){
      if(map.get(s[i+1]) > map.get(s[i])){
          res += map.get(s[i+1]) - map.get(s[i])
          i++;
          continue;
      }
      res += map.get(s[i])
  }
  return res
};

console.log(romanToInt("IV"))