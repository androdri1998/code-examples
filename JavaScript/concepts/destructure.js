const array = [1, 2, 3];
const object = { one: 1, two: 2, three: 3, four: 4 };
const numbers = [object];

const [numberOne, numberTwo, numberThree] = array;
console.log(numberOne, numberTwo, numberThree);
// output: 1 2 3

const { one, two, three: newNumberThree } = object;
console.log(one, two, newNumberThree);
// output: 1 2 3

const [{ four }] = numbers;
console.log(four);
// output: 4
