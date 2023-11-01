// In this lab, you are tasked with implementing a function that calculates the sum of all possible odd-length subarrays of a given array of positive integers. A subarray is defined as a contiguous subsequence of the given array.

const sumOddLengthSubArrays = (arr) => {
  let totalSum = 0;
  const arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i++) {
    const subArrayLength = arrayLength - i;
    const totalElements = subArrayLength * (i + 1);
    const oddElements = Math.ceil(totalElements / 2);
    totalSum += oddElements * arr[i];
  }

  return totalSum;
};
console.log(sumOddLengthSubArrays([1, 4, 2, 5, 3]));

const sumOddLengthSubArrays2 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if ((j - i + 1) % 2 === 1) {
        sum += arr.slice(i, j + 1).reduce((acc, x) => acc + x);
      }
    }
  }
  return sum;
};
console.log(sumOddLengthSubArrays2([1, 4, 2, 5, 3]));
