/**
 * Given an array arr of integers, check if there exist two indices i and j such that :
 * i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 */

const checkIfExists = (arr) => {
  let left = 0,
    right = 1;

  while (left < arr.length - 1) {
    if (arr[left] == arr[right] * 2 || arr[right] == arr[left] * 2) {
      return true;
    } else if (right === arr.length - 1) {
      left++;
      right = left + 1;
    } else {
      right++;
    }
  }
  return false;
};
console.log(checkIfExists([-2, 0, 10, -19, 4, 6, -8]));

function checkIfDoubleExists(arr) {
  let set = new Set(); // Create a set to store visited elements

  for (let num of arr) {
    if (set.has(num * 2) || set.has(num / 2)) {
      return true; // Found a valid pair
    }
    set.add(num); // Add current number to the set
  }

  return false; // No valid pair found
}

// Example usage:
console.log(checkIfDoubleExists([-2, 0, 10, -19, 4, 6, -8]));
