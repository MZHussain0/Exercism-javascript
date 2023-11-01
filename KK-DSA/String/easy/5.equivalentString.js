/**
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
 */

const arrayStringEquivalent = (words1, words2) => {
  return words1.join("") === words2.join("");
};
console.log(arrayStringEquivalent(["ab", "c"], ["a", "bc"]));
