/**
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 */
const convertToTitle = (columnNumber) => {
  let ans = "";

  while (columnNumber > 0) {
    let code = columnNumber % 26;
    code === 0 ? (code = 26) : 0;
    ans = String.fromCharCode(code + 64) + ans;
    columnNumber = (columnNumber - code) / 26;
  }
  return ans;
};

console.log(convertToTitle(61));
