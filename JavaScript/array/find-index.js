const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arraySmaller = [1, 2, 3, 4, 6, 7, 8, 9, 10];

const isEqualToFive = (value) => value === 5;

const index = array.findIndex(isEqualToFive);
console.log(index);
// output: 4

const result = arraySmaller.findIndex(isEqualToFive);
console.log(result);
// output: -1
