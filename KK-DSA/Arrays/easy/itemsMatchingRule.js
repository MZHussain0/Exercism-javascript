/**
 * You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
 */

const countMatches = (items, ruleKey, ruleValue) => {
  let count = 0;
  for (const item of items) {
    const [type, color, name] = item;

    if (
      (ruleKey === "type" && ruleValue === type) ||
      (ruleKey === "color" && ruleValue === color) ||
      (ruleKey === "name" && ruleValue === name)
    ) {
      count++;
    }
  }
  return count;
};
console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
