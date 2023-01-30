/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    if(n === 1) return [[1]]
    const res = new Array(n).fill(0).map(() => new Array(n))
    let val = 1
    let loop = Math.floor(n/2)
    let [row,col] = [0,0]
    let offset = 1
    let [startRow,startCol] = [0,0]

    while(loop--){
        for(;col<n+startCol-offset;col++){
            res[row][col] = val
            val++
        }
        for(;row<n+startRow-offset;row++){
            res[row][col] = val
            val++
        }
        for(;col>startCol;col--){
            res[row][col] = val
            val++
        }
        for(;row>startRow;row--){
            res[row][col] = val
            val++
        }
        offset+=2
        row += 1
        col += 1
        startRow = row
        startCol = col
        
    }
    if(n % 2){
        let mid = Math.floor(n/2)
        res[mid][mid] = val
    }

    return res
};

console.log(generateMatrix(6))

// @lc code=end

