/**
 * In this lab, you have to create a function called map which takes in two arguments: an integer array arr and a mapping function fn. The function should return a new array with the transformation applied to each element such that returnedArray[i] = fn(arr[i], i).

Do not use the built-in Array.map method for this task.
 */

const map = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

console.log(map([1, 2, 3, 4], (num) => num + 1));
