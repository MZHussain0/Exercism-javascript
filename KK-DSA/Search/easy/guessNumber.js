/**
 * We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.
 */
function highorLow(num) {
  let pick = 6;
  if (num === pick) return 0;
  if (num > pick) return -1;
  if (num < pick) return 1;
}

const guessNumber = (n) => {
  let start = 0;
  let end = n;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (highorLow(mid) === 0) return mid;
    if (highorLow(mid) === -1) end = mid - 1;
    if (highorLow(mid) === 1) start = mid + 1;
  }
  return -1;
};

console.log(guessNumber(6));
