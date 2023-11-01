/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

const isPalindrome = (s) => {
  let newStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return s.split(" ").reverse().join("") === newStr;
};

console.log(isPalindrome("race a car"));
