//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
export const decodedValue = (colors) => {
  let value = "";
  for (const color of colors.slice(0, 2)) {
    value += COLORS.indexOf(color);
  }
  return Number(value);
};
console.log(decodedValue(["brown", "black", "red"]));
