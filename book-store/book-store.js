//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const cost = (books) => {
  const disc = [1, 0.95, 0.9, 0.8, 0.75];
  const bookSet = [];

  while (books.length > 0) {
    const set = new Set(books);
    bookSet.push(set.size);

    for (let e of set) {
      books.splice(books.indexOf(e), 1);
    }
  }

  while (bookSet.includes(3) && bookSet.includes(5)) {
    bookSet.splice(bookSet.indexOf(3), 1);
    bookSet.splice(bookSet.indexOf(5), 1);
    bookSet.push(4, 4);
  }

  console.log(bookSet);
  return bookSet.reduce((acc, cur) => acc + cur * 800 * disc[cur - 1], 0);
};
console.log(cost([2, 2, 2, 3, 3, 3, 4, 4, 5]));
