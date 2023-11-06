/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 */

const intersectionOfArrays = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];

  for (const num of set1) {
    if (set2.has(num)) result.push(num);
  }
  return result;
};

console.log(intersectionOfArrays([1, 2, 2, 1], [2, 2]));

/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 */

const intersection2 = (nums1, nums2) => {
  // Sort the arrays in ascending order
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] === nums2[pointer2]) {
      result.push(nums1[pointer1]);
      pointer1++;
      pointer2++;
    } else if (nums1[pointer1] < nums2[pointer2]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }

  return result;
};
console.log(intersection2([1, 2, 2, 1], [2]));

function intersect(nums1, nums2) {
  const map = new Map();
  const result = [];

  // Store the count of each number in nums1
  for (const num of nums1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  map;

  // Check the count of each number in nums2
  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
}
console.log(intersect([1, 2, 2, 1], [2]));
