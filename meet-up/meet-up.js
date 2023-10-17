/**
Calculate the date of meetups.

Typically meetups happen on the same day of the week. In this exercise, you will take a description of a meetup date, and return the actual meetup date.

Examples of general descriptions are:

The first Monday of January 2017
The third Tuesday of January 2017
The wednesteenth of January 2017
The last Thursday of January 2017
The descriptors you are expected to parse are: first, second, third, fourth, fifth, last, monteenth, tuesteenth, wednesteenth, thursteenth, friteenth, saturteenth, sunteenth

Note that "monteenth", "tuesteenth", etc are all made up words. There was a meetup whose members realized that there are exactly 7 numbered days in a month that end in '-teenth'. Therefore, one is guaranteed that each day of the week (Monday, Tuesday, ...) will have exactly one date that is named with '-teenth' in every month.

Given examples of a meetup dates, each containing a month, day, year, and descriptor calculate the date of the actual meetup. For example, if given "The first Monday of January 2017", the correct meetup date is 2017/1/2.

In JavaScript, the Date object month's index ranges from 0 to 11.
 */
const meetup = (description) => {
  const descriptorMappings = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    last: -1,
    monteenth: 13,
    tuesteenth: 14,
    wednesteenth: 15,
    thursteenth: 16,
    friteenth: 17,
    saturteenth: 18,
    sunteenth: 19,
  };
  const [, descriptor, day, , month, year] = description.split(" ");
  const dayOfWeek = new Date(`${month}-1, ${year}`).getDay();

  console.log("🚀 ~ file: meet-up.js:39 ~ dayOfWeek:", dayOfWeek);
};

console.log(meetup("The last Tuesday of January 2017"));
