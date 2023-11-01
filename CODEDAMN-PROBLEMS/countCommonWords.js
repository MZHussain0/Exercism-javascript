/**
 * In this lab, you will be working with two string arrays, words1 and words2. Your task is to create a function countWords that returns the number of strings that appear exactly once in each of the two arrays.
 */

const countWords = (words1, words2) => {
  const d1 = [];
  const d2 = [];
  const common = [];
  for (const word of words1) {
    if (words1.indexOf(word) === words1.lastIndexOf(word)) {
      d1.push(word);
    }
  }

  for (const word of words2) {
    if (words2.indexOf(word) === words2.lastIndexOf(word)) {
      d2.push(word);
    }
  }

  for (const word of d1) {
    if (d2.includes(word)) {
      common.push(word);
    }
  }
  return common.length;
};
console.log(
  countWords(
    ["leetcode", "is", "amazing", "as", "is"],
    ["amazing", "leetcode", "is"]
  )
);

const countWords2 = (words1, words2) => {
  const d1 = new Set();
  const d2 = new Set();
  const common = [];

  for (const word of words1) {
    if (!d1.has(word) && words1.lastIndexOf(word) === words1.indexOf(word)) {
      d1.add(word);
    }
  }

  for (const word of words2) {
    if (!d2.has(word) && words2.lastIndexOf(word) === words2.indexOf(word)) {
      // d2.add(word);
      if (d1.has(word)) {
        common.push(word);
      }
    }
  }

  return common.length;
};

console.log(
  countWords2(
    ["leetcode", "is", "amazing", "as", "is"],
    ["amazing", "leetcode", "is"]
  )
);
