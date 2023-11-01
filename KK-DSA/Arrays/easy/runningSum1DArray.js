/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
 */

const runningSum = (nums) => {
  let result = [];
  nums.forEach((el, i) => {
    result[i] = (result[i - 1] || 0) + el;
  });
  return result;
};

console.log(runningSum([1, 2, 3, 4]));
