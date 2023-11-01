/**
 * In this lab, you will be implementing a custom reduce function for integer arrays, without using the built-in Array.reduce method. The custom reduce function takes an integer array nums, a reducer function fn, and an initial value init as arguments and returns the reduced array value.

The reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, the function should return the init value.
 */

const reduce = (nums, fn, init) => {
  let val = init;
  for (const num of nums) {
    val = fn(val, num);
  }
  return val;
};
console.log(reduce([1, 2, 3, 4], (acc, num) => acc + num, 0));
