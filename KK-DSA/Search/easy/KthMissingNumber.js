/**
 * Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.
 */

const findKthPositive = (arr, k) => {
  let missingCount = 0;
  let currentNumber = 1;
  let i = 0;
  while (missingCount < k) {
    if (i < arr.length && arr[i] === currentNumber) {
      currentNumber++;
      i++;
    } else {
      missingCount++;
      currentNumber++;
    }
  }
  return currentNumber - 1;
};
console.log(findKthPositive([2, 3, 4, 7, 11], 5));
