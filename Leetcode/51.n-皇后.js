/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  function isValid(row, col, chessBoard, n) {
    for (let i = 0; i < row; i++) {
      if (chessBoard[i][col] === 'Q') {
        return false;
      }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] === 'Q') {
        return false;
      }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessBoard[i][j] === 'Q') {
        return false;
      }
    }

    return true;
  }

  function transformChessBoard(chessBoard) {
    let temp = [...chessBoard];
    let res = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].indexOf('Q') === -1) {
        return [];
      }
      res.push(temp[i].join());
    }
  }
  let res = [];

  function backTrack(row, chessBoard) {
    if (row === n) {
      res.push(transformChessBoard(chessBoard));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessBoard, n)) {
        chessBoard[row][col] = 'Q';
        backTrack(row + 1, chessBoard);
        chessBoard[row][col] = '.';
      }
    }
  }

  let chessBorad = new Array(n).fill([]).map(() => new Array(n).fill('.'));

  backTrack(0, chessBorad);

  return res;
};
// @lc code=end
