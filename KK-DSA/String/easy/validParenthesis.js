/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    // If the current character is an opening bracket, push it onto the stack
    if (currentChar === "(" || currentChar === "{" || currentChar === "[") {
      stack.push(currentChar);
    } else {
      // If the stack is empty or the top of the stack does not correspond to the current closing bracket, return false
      if (
        stack.length === 0 ||
        (currentChar === ")" && stack[stack.length - 1] !== "(") ||
        (currentChar === "}" && stack[stack.length - 1] !== "{") ||
        (currentChar === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }

      // Otherwise, pop the top element from the stack
      stack.pop();
    }
  }

  // If the stack is empty after processing the entire string, then the input string is valid
  return stack.length === 0;
}
