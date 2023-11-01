/**
 * A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 */

const checkPangram = (sentence) => {
  return new Set([...sentence]).size === 26;
};

console.log(checkPangram("thequickbrownfoxjumpsoverthelazydog"));
