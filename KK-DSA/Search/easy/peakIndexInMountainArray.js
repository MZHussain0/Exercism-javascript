/**
 * An array arr is a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.
 */

function peakIndexInMountainArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      // increasing slope, move left pointer
      left = mid + 1;
    } else {
      // decreasing slope or peak found, move right pointer
      right = mid;
    }
  }

  return left;
}

console.log(peakIndexInMountainArray([0, 2, 1, 0]));

const peak = (arr) => {
  const max = Math.max(...arr);
  return arr.indexOf(max);
};

console.log(peak([0, 2, 1, 0]));
