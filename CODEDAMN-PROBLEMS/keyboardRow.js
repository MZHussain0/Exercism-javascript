/**
 * In this lab, you will be working with a function called findWords(). This function takes an array of strings words as input and returns the words that can be typed using letters of the alphabet on only one row of the American keyboard.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
 */

const findWords = (words) => {
  const rows = {
    qwertyuiop: [],
    asdfghjkl: [],
    zxcvbnm: [],
  };

  words.forEach((word) => {
    const row = Object.keys(rows).find((key) =>
      word
        .toLowerCase()
        .split("")
        .every((char) => key.includes(char))
    );

    if (row) rows[row].push(word);
  });
  return Object.values(rows).flat();
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace", "you"]));
