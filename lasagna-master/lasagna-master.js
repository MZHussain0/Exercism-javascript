/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export const cookingStatus = (time) => {
  if (time === 0) {
    return "Lasagna is done.";
  } else if (time) {
    return "Not done, please wait.";
  }
  return "You forgot to set the timer.";
};

console.log(cookingStatus());

export const preparationTime = (layers, time) => {
  if (time) {
    return time * layers.length;
  }
  return 2 * layers.length;
};

console.log(
  preparationTime(
    ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"],
    3
  )
);

export const quantities = (layers) => {
  const noodles = layers.filter((layer) => layer === "noodles");
  const sauce = layers.filter((layer) => layer === "sauce");

  return {
    noodles: 50 * noodles.length,
    sauce: 0.2 * sauce.length,
  };
};
console.log(
  quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"])
);

export const addSecretIngredient = (firendsList, myList) => {
  myList.push(firendsList[firendsList.length - 1]);
  console.log(myList);
};

export const scaleRecipe = (recipe, portions) => {
  const newRecipe = {};
  for (const key in recipe) {
    newRecipe[key] = recipe[key] * (portions / 2);
  }
  return newRecipe;
};
console.log(
  scaleRecipe(
    {
      noodles: 200,
      sauce: 0.5,
      mozzarella: 1,
      meat: 100,
    },
    4
  )
);
