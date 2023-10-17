// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}
console.log(seeingDouble([1, 2, 3, 4]));

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.flatMap((card) => {
    if (card === 3) {
      return [card, card, card];
    } else {
      return card;
    }
  });
}
console.log(threeOfEachThree([1, 3, 9, 3, 7]));

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middle = Math.floor(deck.length / 2);
  return deck.slice(middle - 1, middle + 1);
}
console.log(middleTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const middle = Math.floor(deck.length / 2);
  return deck
    .slice(1, middle)
    .concat(deck[deck.length - 1], deck[0])
    .concat(deck.slice(middle, deck.length - 1));
}
console.log(sandwichTrick([1, 2, 3, 5, 6, 10]));

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}
console.log(twoIsSpecial([1, 2, 3, 2, 5, 2]));
/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}
console.log(perfectlyOrdered([10, 1, 5, 3, 2, 8, 7]));

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
console.log(reorder([10, 1, 5, 3, 2]));
