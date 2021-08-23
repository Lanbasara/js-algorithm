/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  let length = matrix.length
  for(let i=0;i<length/2;i++){
      [matrix[i],matrix[length-1-i]] = [matrix[length-1-i],matrix[i]]
  }
  for(let i=0;i<length;i++){
      for(let j=i+1;j<length;j++){
          [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
      }
  }
  return matrix
};