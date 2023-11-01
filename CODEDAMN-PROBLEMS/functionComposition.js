/**
 * In this lab, you will be working on creating a function composition from an array of functions using ESM (ECMAScript Modules) import/export. The goal is to implement a compose function that takes an array of functions [f1, f2, f3, ..., fn] as input, and returns a new function fn that represents the composition of all the given functions.

The function composition of [f(x), g(x), h(x)] is given by fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume that each function in the array accepts one integer as input and returns one integer as output.

Here are some examples to help you understand the problem:

Example 1:
const fn = compose([x => x + 1, x => x * x, x => 2 * x])
fn(4) // 65
 */

const compose = (functions) => {
  return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
};
const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn(4));
