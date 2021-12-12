/*
 * @lc app=leetcode.cn id=778 lang=javascript
 *
 * [778] 水位上升的泳池中游泳
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var swimInWater = function(grid) {
  /**
      解空间: [0, Math.max(all items in grid)]
   */
   let l = 0;
   let r = grid.reduce((acc,cur) => {
       let tempMax = Math.max(...cur)
       acc = Math.max(acc, tempMax)
       return acc
   },0)

   let set = new Set()

   function check(mid,x,y){
       if(x>grid.length-1 || x<0 || y>grid[0].length-1 || y<0){
           return false
       }
       if(grid[x][y] > mid){
           return false
       }
       if(x === grid.length-1 && y===grid[0].length-1){
           return true
       }
       if(set.has(JSON.stringify([x,y]))){
           return false
       }
       set.add(JSON.stringify([x,y]))
       let res = check(mid,x-1,y) || check(mid,x+1,y) || check(mid,x,y-1) || check(mid,x,y+1)
       return res
   }

   while(l<=r){
       let mid = Math.floor(l + (r-l)/2)
       if(check(mid,0,0)){
           r = mid - 1
       } else {
           l = mid +1
       }
       set = new Set()
   }
   return l
};
console.log(swimInWater([[0,2],[1,3]]))
// @lc code=end

