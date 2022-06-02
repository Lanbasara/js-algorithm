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
 class MonoStack{
    constructor(source){
        this.list = []
        this.res = new Array(source.length).fill(0)
        this.source = [...source]
    }
    enqueue(val){
        let back = this.list[this.list.length-1]
        while(this.source[back] !== undefined && this.source[val] > this.source[back]){
            let temp = this.list.pop()
            this.res[temp] = val -temp
            back = this.list[this.list.length-1]
        }
        this.list.push(val)
    }
}
var dailyTemperatures = function(temperatures) {
    let mono = new MonoStack(temperatures)
    for(let i=0;i<temperatures.length;i++){
        mono.enqueue(i)
    }
    return mono.res
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
// @lc code=end

