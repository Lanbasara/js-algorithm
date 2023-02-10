/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  const res = []

  const board = new Array(n).fill(0).map(() => new Array(n).fill('.'))

  function isValid(row,col,board){
      for(let i=0;i<row;i++){
          if(board[i][col] === 'Q'){
              return false
          }
      }

      for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
          if(board[i][j] === 'Q'){
              return false
          }
      }
       for(let i=row-1,j=col+1;i>=0&&j<board[row].length;i--,j++){
          if(board[i][j] === 'Q'){
              return false
          }
      }

      return true

  }

  function transformBoard(board){
      let res = []
      for(let i=0;i<board.length;i++){
          res.push(board[i].join())
      }
      return res
  }

  function backTrack(row,board){
      if(row >= n){
          res.push(transformBoard(board))
          return
      }
      for(let i=0;i<n;i++){
          if(isValid(row,i,board)){
              board[row][i] = 'Q'
              backTrack(row+1,board)
              board[row][i] = '.'
          }
      }
  }

  backTrack(0,board)
  return res.length
};

console.log(totalNQueens(4))

console.log(4)
// @lc code=end

