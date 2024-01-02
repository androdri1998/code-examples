const array = [1, 2, 3, 4, 5];
const arrayBigger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isLessOrEqualThanFive = (value) => value <= 5;

const result = array.every(isLessOrEqualThanFive);
console.log(result);
// output: true

const secondResult = arrayBigger.every(isLessOrEqualThanFive);
console.log(secondResult);
// output: false
