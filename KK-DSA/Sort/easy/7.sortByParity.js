/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.Return any array that satisfies this condition.
 */
const sortArray = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] % 2 === 0) {
      left++;
    } else if (nums[right] % 2 !== 0) {
      right--;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
  }
  return nums;
};

console.log(sortArray([3, 1, 2, 4]));

const sortArray1 = (nums) => {
  let result = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
  return result;
};

console.log(sortArray1([3, 1, 2, 4]));
