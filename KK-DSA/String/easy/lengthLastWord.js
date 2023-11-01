/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring consisting of non-space characters only.
 */

const lengthOfLastWord = (s) => {
  let trimmedStr = s.trim();
  return trimmedStr.length - trimmedStr.lastIndexOf(" ") - 1;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
