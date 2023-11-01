/**
 * There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.
 */

const kidsWithCandies = (candies, extraCandies) => {
  const result = [];
  const maxCandies = Math.max(...candies);
  candies.forEach((candy) => {
    if (candy + extraCandies >= maxCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  });
  return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

const kidsWithCandies2 = (candies, extraCandies) => {
  const maxCandies = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= maxCandies);
};
console.log(kidsWithCandies2([2, 3, 5, 1, 3], 3));
