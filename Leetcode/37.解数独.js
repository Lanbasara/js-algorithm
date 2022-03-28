/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  /**
   *
   * @param {*} row
   * @param {*} col
   * @param {*} val
   * @param {*} board
   * @returns
   */
  function isVaild(row, col, val, board) {
    // 同行不同列的元素
    for (let i = 0; i < board[row].length; i++) {
      if (board[row][i] === val) {
        return false;
      }
    }
    // 同列不同行的元素
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === val) {
        return false;
      }
    }

    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    // 在一个3X3方块中的元素
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val) {
          return false;
        }
      }
    }
    return true;
  }
  function backTrack() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] !== '.') continue;
        // 从1-9尝试填入数字
        for (let val = 1; val <= 9; val++) {
          if (isVaild(i, j, `${val}`, board)) {
            board[i][j] = `${val}`;
            if (backTrack()) {
              return true;
            } else {
              board[i][j] = `.`;
            }
          }
        }
        // 如果都尝试过了但是没有进展,那么证明没有任何结果
        return false;
      }
    }
    return true;
  }
  backTrack();
  return board;
};
console.log(
  solveSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
