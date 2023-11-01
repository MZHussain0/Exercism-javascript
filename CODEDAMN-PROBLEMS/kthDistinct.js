// In this lab, you will be implementing a function to find the Kth distinct string in an array. A distinct string is a string that is present only once in an array.

// You will be given an array of strings arr, and an integer k, and your task is to return the kth distinct string present in arr. If there are fewer than k distinct strings, your function should return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

const kthDistinct = (arr, k) => {
  const distincts = [];
  for (const item of arr) {
    console.log(arr.indexOf(item), arr.lastIndexOf(item));
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
      distincts.push(item);
    }
  }
  return distincts[k - 1] || "";
};
console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
