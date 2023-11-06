/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
 */

const sqrt = (x) => {
  if (x === 0 || x === 1) return x;

  let start = 1;
  let end = Math.floor(x / 2);
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      start = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }
  return result;
};

console.log(sqrt(5));
