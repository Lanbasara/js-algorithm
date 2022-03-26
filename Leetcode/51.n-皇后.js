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
  /**
   * 验证当前棋盘上能否放下一个新的Q
   * tips: 都只需要验证当前位置之前的
   * 因为递归的特性, 行内无需检查
   * @param {*} row
   * @param {*} col
   * @param {*} chessBoard
   * @param {*} n
   * @returns boolean
   */
  function isValid(row, col, chessBoard, n) {
    // 在row之前的行
    for (let i = 0; i < row; i++) {
      if (chessBoard[i][col] === 'Q') {
        return false;
      }
    }
    // 45度对角线
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] === 'Q') {
        return false;
      }
    }
    // 135度对角线
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessBoard[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  }

  /**
   *
   * @param {*} chessBoard
   * @returns 处理后的棋盘结果
   */
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

  // 构建棋盘
  let chessBorad = new Array(n).fill([]).map(() => new Array(n).fill('.'));

  backTrack(0, chessBorad);

  return res;
};
// @lc code=end
