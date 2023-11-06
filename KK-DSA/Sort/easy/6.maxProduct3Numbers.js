/**
 * Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
 */

const maxProduct = (nums) => {
  nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
};

console.log(maxProduct([1, 2, 3, 4]));
