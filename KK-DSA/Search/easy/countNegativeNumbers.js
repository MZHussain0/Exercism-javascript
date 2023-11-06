/**
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
 * solve it with O[n+m] complexity
 */

const negativeNumbers = (grid) => {
  const flattenedGrid = grid.flat();
  let count = 0;
  for (const num of flattenedGrid) {
    if (num < 0) count++;
  }
  return count;
};
console.log(
  negativeNumbers([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);

const countNegatives = (grid) => {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (grid[row][col] < 0) {
      count += rows - row;
      col--;
    } else {
      row++;
    }
  }
  return count;
};
console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
