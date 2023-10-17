// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string | undefined} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Tropical Island":
      return 3;
    case "Energizer":
      return 1.5;
    case "All or Nothing":
      return 5;
    case "Pure Strawberry Joy":
      return 0.5;
    case "Green Garden":
      return 1.5;
    default:
      return 2.5;
  }
}
console.log(timeToMixJuice("Energizer"));

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let numberOfLimesTocut = 0;
  let intialWedges = 0;
  let index = 0;

  while (intialWedges < wedgesNeeded && index < limes.length) {
    switch (limes[index]) {
      case "small":
        numberOfLimesTocut += 1;
        intialWedges += 6;
        break;
      case "medium":
        numberOfLimesTocut += 1;
        intialWedges += 8;
        break;

      case "large":
        numberOfLimesTocut += 1;
        intialWedges += 10;
        break;
    }
    index++;
  }
  return numberOfLimesTocut;
}
console.log(
  limesToCut(42, [
    "small",
    "large",
    "large",
    "medium",
    "small",
    "large",
    "large",
    "medium",
  ])
);
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    timeLeft -= timeToMixJuice(orders.shift());
  }
  return orders;
}
