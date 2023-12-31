﻿/**
 * You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
 */

function firstBadVersion(n) {
  let start = 1;
  let end = n;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (isBadVersion(mid)) {
      // If mid is a bad version, the first bad version must be in the left half
      end = mid;
    } else {
      // If mid is not a bad version, the first bad version must be in the right half
      start = mid + 1;
    }
  }

  return start;
}
