/**
 * Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
 */

const diagonalSum = (mat) => {
  let sum = 0;
  const n = mat.length;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i]; // add elements on primary diagonal

    if (i !== n - 1 - i) {
      // check if the element is not on the primary diagonal
      sum += mat[i][n - 1 - i];
      // add elements on secondary diagonal
      console.log(mat[i][n - 1 - i]);
    }
  }

  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
