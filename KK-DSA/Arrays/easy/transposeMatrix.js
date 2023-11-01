/**
 * Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 */

const transposeMatrix = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Create an empty 2D array to store the transposed matrix
  const transposedMatrix = Array.from(Array(cols), () => Array(rows));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
};

console.log(
  transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
