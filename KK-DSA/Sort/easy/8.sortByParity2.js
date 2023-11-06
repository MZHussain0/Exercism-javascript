/**
 * Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.
 */

const sortArr = (nums) => {
  let oddIdx = nums.length - 1;
  let evenIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[evenIdx] % 2 === 1 && nums[oddIdx] % 2 === 0) {
      [nums[evenIdx], nums[oddIdx]] = [nums[oddIdx], nums[evenIdx]];
    }
    if (nums[evenIdx] % 2 === 0) {
      evenIdx += 2;
    }
    if (nums[oddIdx] % 2 === 1) {
      oddIdx -= 2;
    }
  }
  return nums;
};
console.log(sortArr([3, 1, 2, 4]));
/////////////////////////////////////////////////////////////////////////////////////////

const sortArr2 = (nums) => {
  const output = new Array(nums.length);
  let cursorOdd = 1;
  let cursorEven = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      output[cursorOdd] = nums[i];
      cursorOdd += 2;
    } else {
      output[cursorEven] = nums[i];
      cursorEven += 2;
    }
  }
  return output;
};
console.log(sortArr2([3, 1, 2, 4]));
