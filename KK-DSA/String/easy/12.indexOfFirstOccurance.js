/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

const strStr = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i).startsWith(needle)) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("leetcode", "leeto"));
