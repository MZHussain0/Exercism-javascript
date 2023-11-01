/**
 *  you will implement a function arithmeticTriplets(nums: number[], diff: number): number that returns the number of unique arithmetic triplets. Your input will be a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k
nums[j] - nums[i] == diff
nums[k] - nums[j] == diff
Your task is to return the number of unique arithmetic triplets.
 */

const arithmaticTriplets = (nums, diff) => {
  const results = [];

  for (let i = 0; i < nums.length - 2; i++) {
    num1 = nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      num2 = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        num3 = nums[k];
        if (num3 - num2 === diff && num2 - num1 === diff) {
          results.push([num1, num2, num3]);
        }
      }
    }
  }

  return results.length;
};

console.log(arithmaticTriplets([0, 1, 4, 6, 7, 10], 3));

const arithmaticTriplets2 = (nums, diff) => {
  const numMap = new Map();
  const results = [];

  // Store the numbers in the map for quick lookup
  nums.forEach((num) => {
    numMap.set(num, true);
  });

  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const num2 = num1 + diff;
    const num3 = num2 + diff;

    console.log(numMap.get(num2), numMap.get(num3));
    // Check if num1 + diff and num1 + 2*diff exist in the map
    if (numMap.get(num2) && numMap.get(num3)) {
      results.push([num1, num2, num3]);
    }
  }

  return results.length;
};
console.log(arithmaticTriplets2([0, 1, 4, 6, 7, 10], 3));
