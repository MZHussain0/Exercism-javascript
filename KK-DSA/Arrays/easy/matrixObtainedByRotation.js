/**
 * Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.
 */

const findRotation = (mat, target) => {
  const n = mat.length;

  // Check if mat and target are already equal
  if (isEqual(mat, target)) {
    return true;
  }

  // Rotate mat 90 degrees and check if it matches target
  for (let i = 0; i < 3; i++) {
    rotateMatrix(mat, n);
    if (isEqual(mat, target)) {
      return true;
    }
  }

  // No possible rotation found
  return false;
};

const isEqual = (mat1, mat2) => {
  const n = mat1.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat1[i][j] !== mat2[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const rotateMatrix = (mat, n) => {
  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    mat[i].reverse();
  }
};

console.log(
  findRotation(
    [
      [0, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ]
  )
);
