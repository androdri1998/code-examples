const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplyBy2 = (number) => number * 2;
const result = array.map(multiplyBy2);

console.log(result);
// output: [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]
