/**
 * Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
 */

function luckyNumbers(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let min = Math.min(...matrix[i]);
    idx = matrix[i].indexOf(min);

    if (matrix.every((arr) => arr[idx] <= min)) return [min];
  }

  return [];
}

// Example usage:
const matrix = [
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
];

console.log(luckyNumbers(matrix));
