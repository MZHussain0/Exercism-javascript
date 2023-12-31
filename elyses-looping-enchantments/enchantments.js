// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let count = 0;
  stack.forEach((element) => {
    if (element === card) {
      count++;
    }
  });
  return count;
}
console.log(cardTypeCheck([1, 2, 3, 4, 3], 3));

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let even = 0;
  let odd = 0;
  for (const card of stack) {
    if (type) {
      if (card % 2 === 0) {
        even++;
      }
    } else {
      if (card % 2 === 1) {
        odd++;
      }
    }
  }
  return type ? even : odd;
}
console.log(determineOddEvenCards([1, 2, 3, 4, 3], false));
