//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  return `one for ${name || "you"}, one for me.`;
};

console.log(twoFer("alice"));