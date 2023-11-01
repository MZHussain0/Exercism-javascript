/**
 * Given an integer array nums, find the 
subarray with the largest sum, and return its sum.
 */

function maxSubarrayNumbers(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      startIndex = i;
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      endIndex = i;
    }
  }

  return nums.slice(startIndex, endIndex + 1);
}
console.log(maxSubarrayNumbers([5, 4, -1, 7, 8]));

function maxSubarraySum(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([5, 4, -1, 7, 8]));
