/**
 * You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

Notice that x does not have to be an element in nums.

Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.
 */

function bs(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

var specialArr = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums[nums.length - 1]; i++) {
    let res = bs(nums, i);
    if (nums.length - res === i) return i;
  }
  return -1;
};
console.log(specialArr([3, 5]));
