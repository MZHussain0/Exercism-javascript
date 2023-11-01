/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      const complementIndex = map.get(complement);
      return [complementIndex, i];
    }

    map.set(nums[i], i);
  }

  // If no solution is found, return an empty array or throw an error
  return [];
};

console.log(twoSum([3, 2, 3], 6));
