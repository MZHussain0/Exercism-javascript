/**
 * Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.
 */

const numOfString = (patterns, word) => {
  let count = 0;
  for (const pat of patterns) {
    if (word.includes(pat)) count++;
  }
  return count;
};

console.log(numOfString(["a", "abc", "bc", "d"], "abcc"));

const substring = (patterns, word) => {
  let count = 0;
  patterns.map((pattern) => (word.match(pattern) ? count++ : count));
  return count;
};

console.log(substring(["a", "abc", "bc", "d"], "abcc"));
