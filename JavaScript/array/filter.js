const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const compare = (number) => number < 5;
const lessThan5 = array.filter(compare);

console.log(lessThan5);
// output: [ 1, 2, 3, 4 ]
