/**
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn]. 
 */

const shuffle = (nums, n) => {
  let result = [...Array(n * 2)];
  for (let i = 0; i < n; i++) {
    result[i * 2] = nums[i];
    result[i * 2 + 1] = nums[i + n];
  }
  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
