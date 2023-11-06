/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 */

const sortedSquares = (nums) => {
  return nums.map((x) => x * x).sort((a, b) => a - b);
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));

const sortedSquares2 = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  let idx = end;
  let arr = [];

  while (idx > -1) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      arr[idx--] = nums[start] * nums[start];
      start++;
    } else {
      arr[idx--] = nums[end] * nums[end];
      end--;
    }
  }
  return arr;
};
console.log(sortedSquares2([-4, -1, 0, 3, 10]));
