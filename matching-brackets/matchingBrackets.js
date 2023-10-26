/**
 * Given a string containing brackets [], braces {}, parentheses (), or any combination thereof, verify that any and all pairs are matched and nested correctly.
 */

const isPaired = (input) => {
  const stack = [];
  const pairs = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  for (let char of input) {
    if (["[", "{", "("].includes(char)) {
      stack.push(char);
    } else if (["]", "}", ")"].includes(char)) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isPaired("{[][]}"));
