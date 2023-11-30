const array = [1, 2, 3, 4, 50, 6, 50, 8, 9, 10];

const compareGreaterThan20 = (number) => number > 20;
const value = array.find(compareGreaterThan20);
console.log(value);
// output: 50

const compareGreaterThan100 = (number) => number > 100;
const notfound = array.find(compareGreaterThan100);
console.log(notfound);
// output: undefined
