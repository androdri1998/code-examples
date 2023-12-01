const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initialValue = 0;
const sumReduce = (total, currentValue) => total + currentValue * 2;
const sumResult = array.reduce(sumReduce, initialValue);

console.log(sumResult);
// output: 110
