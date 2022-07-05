/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
   let res = new Array(temperatures.length).fill(0)
   let stack = [0]

   for(let i=1;i<temperatures.length;i++){
    if(temperatures[i]<temperatures[stack[stack.length-1]]){
        stack.push(i)
    } else if(temperatures[i]===temperatures[stack[stack.length-1]]){
        // stack.pop()
        stack.push(i)
    } else {
        while(stack.length && temperatures[i]>temperatures[stack[stack.length-1]]){
            let r = i
            let l = stack.pop()
            res[l] = r - l
        }
        stack.push(i)
    }
   }

   return res
};
// @lc code=end

