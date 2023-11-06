/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

const containsDuplicates = (nums) => {
  return new Set(nums).size !== nums.length;
};

console.log(containsDuplicates([1, 2, 3, 1]));
