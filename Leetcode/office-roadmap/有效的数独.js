/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  let colSet = []
  let rowSet = []
  let blockSet = []
  for(let i=0;i<board.length;i++){
      colSet[i] = new Set()
      rowSet[i] = new Set()
      blockSet[i] = new Set()
  }
  for(let i=0;i<board.length;i++){
      for(let j=0;j<board.length;j++){
          if(board[i][j]!=='.'){
            let target = board[i][j];
            let blockIndex = ((Math.floor(i/3)) * 3) + Math.floor(j/3)
            if(colSet[i].has(target) || rowSet[j].has(target) || blockSet[blockIndex].has(target)){
                return false
            }
            colSet[i].add(target)
            rowSet[j].add(target)
            blockSet[blockIndex].add(target)
          }
      }
  }
  return true
};

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))
console.log(isValidSudoku(board2))