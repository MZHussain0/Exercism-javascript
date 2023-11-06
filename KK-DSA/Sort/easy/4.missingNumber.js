/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array
 */

const missingNumber = (nums) => {
  nums.sort((a, b) => a - b);
  const index = nums.findIndex((num, i) => {
    return num !== i;
  });
  return index === -1 ? nums.length : index;
};

console.log(missingNumber([0, 1]));
