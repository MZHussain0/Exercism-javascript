/**
 * You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

Return the earliest year with the maximum population.
 */

const maximumPopulation = (logs) => {
  const flatLogs = [].concat(...logs);
  const minBirthYear = Math.min(...flatLogs);
  const maxDeathYear = Math.max(...flatLogs);

  let populationCounts = {};

  for (let year = minBirthYear; year <= maxDeathYear; year++) {
    populationCounts[year] = 0;
  }

  for (let i = 0; i < logs.length; i++) {
    const [birth, death] = logs[i];
    for (let year = birth; year < death; year++) {
      populationCounts[year]++;
    }
  }

  let maxPopulation = 0;
  let earliestYearMaxPopulation = minBirthYear;

  for (let year = minBirthYear; year <= maxDeathYear; year++) {
    if (populationCounts[year] > maxPopulation) {
      maxPopulation = populationCounts[year];
      earliestYearMaxPopulation = year;
    }
  }

  return earliestYearMaxPopulation;
};
console.log(
  maximumPopulation([
    [1993, 1999],
    [2000, 2010],
  ])
);
