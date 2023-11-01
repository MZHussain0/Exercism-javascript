/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 */

const longestCommonPrefix = (strs) => {
  if (!strs.length) return "";
  let longerstCommonPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    if (!char) return "";
    if (strs.every((str) => str[i] === char)) {
      longerstCommonPrefix += char;
    } else break;
  }
  return longerstCommonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
