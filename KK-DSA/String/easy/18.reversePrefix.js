/**
 * Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.
 */

const reversePrefix = (word, ch) => {
  if (!word.includes(ch)) return word;
  const idx = word.indexOf(ch);
  let segment = word.slice(0, idx + 1);
  const reversedSegment = segment.split("").reverse().join("");
  return reversedSegment + word.slice(idx + 1);
};
console.log(reversePrefix("abcdefd", "d"));
