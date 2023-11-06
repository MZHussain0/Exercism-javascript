/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 */

const searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

console.log(searchInsert([1, 3, 5, 6], 2));

var searchInsert2 = function (nums, target) {
  // includes,indexOf,rest operator,arrow function,sorting via sort method
  if (nums.includes(target))
    //includes method
    return nums.indexOf(target); //returns index method//
  return [...nums, target].sort((a, b) => a - b).indexOf(target); //return where it shold be inserted//
};
