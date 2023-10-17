//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (pangram) => {
  return new Set(pangram.toLowerCase().split(" ").join("")).size === 26;
};
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
