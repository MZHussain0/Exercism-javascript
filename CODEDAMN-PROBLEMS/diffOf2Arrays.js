/**
 * n this lab, you have to build a function findDifference(nums1, nums2) that takes two 0-indexed integer arrays nums1 and nums2, and returns a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.
 */

const findDifference = (nums1, nums2) => {
  const answer = [[], []];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (let num of set1) {
    if (!set2.has(num)) {
      answer[0].push(num);
    }
  }

  for (let num of set2) {
    if (!set1.has(num)) {
      answer[1].push(num);
    }
  }

  return answer;
};

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));

const findDifference2 = (nums1, nums2) => {
  const u1 = unqiues(nums1, nums2);
  const u2 = unqiues(nums2, nums1);
  return [u1, u2];

  function unqiues(arr1, arr2) {
    const uniques = [];
    for (const num of arr1) {
      if (!arr2.includes(num) && !uniques.includes(num)) {
        uniques.push(num);
      }
    }
    return uniques;
  }
};

console.log(findDifference2([1, 2, 3, 3], [1, 1, 2, 2]));
