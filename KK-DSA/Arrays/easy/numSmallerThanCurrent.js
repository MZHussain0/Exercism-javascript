/**
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
 */

const smallerNumberThanCurrent = (nums) => {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const countMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (!(sortedNums[i] in countMap)) {
      countMap[sortedNums[i]] = i;
    }
  }
  return nums.map((num) => countMap[num]);
};

console.log(smallerNumberThanCurrent([8, 1, 2, 2, 3]));
