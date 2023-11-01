/**
 * There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
 */

const largestAltitude = (gain) => {
  let currentAltitude = 0;
  let highestAltitude = 0;

  for (const gainValue of gain) {
    currentAltitude += gainValue;
    highestAltitude = Math.max(highestAltitude, currentAltitude);
  }

  return highestAltitude;
};

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));

const largestAltitude2 = (gain) => {
  let altitude = [0];
  let highestAltitude = 0;
  for (const alt of gain) {
    highestAltitude += alt;
    altitude.push(highestAltitude);
  }
  return Math.max(...altitude);
};

console.log(largestAltitude2([-4, -3, -2, -1, 4, 3, 2]));
