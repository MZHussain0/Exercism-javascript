/**
 * You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.
 */

const mapString = (s) => {
  const alphabet = "0abcdefghijklmnopqrstuvwxyz";
  const res = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      // checking if the third character is a '#', because then it will be a two-digit representation.
      // Convert the substring (s[i] + s[i+1]) to an integer and find the corresponding alphabet character.
      res.push(alphabet[parseInt(s[i] + s[i + 1])]);
      i += 2; // Skip the next two characters.
    } else {
      // If there's no '#', it's a one-digit representation.
      // Convert the current character to an integer and find the corresponding alphabet character.
      res.push(alphabet[parseInt(s[i])]);
    }
  }
  // Join the resulting characters into a single string and return it.
  return res.join("");
};

console.log(mapString("1311#11#13")); // Output: 'agm'
