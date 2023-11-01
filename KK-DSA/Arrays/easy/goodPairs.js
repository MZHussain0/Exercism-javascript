/**
 * Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 */

const goodPairs = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let nums1 = nums[i];
    nums1;
    for (let j = i + 1; j < nums.length; j++) {
      let nums2 = nums[j];
      if (nums1 === nums2) {
        count++;
      }
    }
  }
  return count;
};
console.log(goodPairs([1, 2, 3, 1, 1, 3]));

const numIdenticalPairs = (nums) => {
  let count = 0;
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      count += map[nums[i]];
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
