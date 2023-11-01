﻿/**
 * The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
 */

const addToArrayForm = (nums, k) => {
  const result = BigInt(nums.join("")) + BigInt(k);
  return Array.from(String(result), Number);
};

console.log(addToArrayForm([1, 2, 6], 2));
