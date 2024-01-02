const array = [1, 2, 3, 4, 5, 6];
const arraySmaller = [1, 2, 3, 4, 5];

const isBiggerThanFive = (value) => value > 5;

const result = array.some(isBiggerThanFive);
console.log(result);
// output: true

const secondResult = arraySmaller.some(isBiggerThanFive);
console.log(secondResult);
// output: false
