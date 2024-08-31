const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 6];

const isLessThanOrEqualFive = (value) => value <= 5;

const firstResult = array1.every(isLessThanOrEqualFive);
console.log(firstResult);
// output: true

const secondResult = array2.every(isLessThanOrEqualFive);
console.log(secondResult);
// output: false
