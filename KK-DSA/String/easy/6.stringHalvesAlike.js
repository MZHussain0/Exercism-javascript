/**
 * You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.
 */

const halvesAlike = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const firstHalve = str.slice(0, str.length / 2);
  let firstCount = 0;
  const secondHalve = str.slice(str.length / 2);
  let secondCount = 0;

  for (const char of firstHalve) {
    if (vowels.includes(char)) firstCount++;
  }

  for (const char of secondHalve) {
    if (vowels.includes(char)) secondCount++;
  }

  return firstCount === secondCount;
};
console.log(halvesAlike("book"));

const halvesAlike2 = (s) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let firstCount = 0;
  let secondCount = 0;
  let n = s.length / 2;
  for (let i = 0; i < n; i++) {
    if (vowels.includes(s[i].toLowerCase())) firstCount++;
    if (vowels.includes(s[i + n].toLowerCase())) secondCount++;
  }
  return firstCount === secondCount;
};

console.log(halvesAlike2("book"));
