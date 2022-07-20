/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 *
 * https://leetcode.cn/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (70.29%)
 * Likes:    567
 * Dislikes: 0
 * Total Accepted:    103.6K
 * Total Submissions: 147.4K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。
 * 
 * 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 * 
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100
 * 。计算这个岛屿的周长。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
 * 输出：16
 * 解释：它的周长是上面图片中的 16 个黄色的边
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1]]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：grid = [[1,0]]
 * 输出：4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * row == grid.length
 * col == grid[i].length
 * 1 
 * grid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    let [row,col] = [grid.length-1,grid[0].length-1]
    
    function getRowRes(row,col,value){
        let isIsland = value === 1
        if(row === 0){
            return isIsland ? 1 : 0
        } else if(row === grid.length-1){
            let isTopIsland = grid[row-1][col] === 1
            let temp1 = isTopIsland ? 0 : 1
            let temp2 = isIsland ? 1 : 0
            return temp1 + temp2
        } else {
            let isTopIsland = grid[row-1][col] === 1
            return isTopIsland ? 0 : 1
        }
    }

    function getColRes(row,col,value){
        let isIsland = value === 1
        if(col === 0){
            return isIsland ? 1 : 0
        } else if(col === grid[row].length-1){
            let isLeftIsland = grid[row][col-1] === 1
            let temp1 = isLeftIsland ? 0 : 1
            let temp2 = isIsland ? 1 : 0
            return temp1 + temp2
        } else {
            let isLeftIsland = grid[row][col-1] === 1
            return isLeftIsland ? 0 : 1
        }
    }
    let res = 0
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            let [row,col,value] = [i,j,grid[i][j]]
            res += (getRowRes(row,col,value)+getColRes(row,col,value))
        }
    }
    return res
};
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))
// @lc code=end

