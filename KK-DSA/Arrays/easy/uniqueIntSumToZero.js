/**
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 */

const sumZero = (n) => {
  const result = [];
  let sum = 0;
  for (let i = 1; i < n; i++) {
    result.push(i);
    sum += i;
  }
  result.push(-sum);

  return result;
};
console.log(sumZero(5));
//////////////////////////////////////////////////////////////////////////////
const sumZero2 = (n) => {
  let ar = [];
  // ar.length = n;
  for (let i = 0; i < n; i++) ar[i] = i * 2 - n + 1;
  return ar;
};
console.log(sumZero2(5));
