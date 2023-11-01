/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 */

const findNumbers = (nums) => {
  let count = 0;
  for (const num of nums) {
    if (num.toString().length % 2 === 0) count++;
  }
  return count;
};
console.log(findNumbers([555, 901, 482, 1771]));
