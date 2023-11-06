/**
 * Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.
 */

const isPerfectSquare = (num) => {
  let start = 0;
  let end = num;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === num) return true;
    if (mid * mid < num) start = mid + 1;
    if (mid * mid > num) end = mid - 1;
  }
  return false;
};

console.log(isPerfectSquare(25));
