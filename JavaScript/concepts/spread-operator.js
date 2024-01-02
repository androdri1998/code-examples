const array = [1, 2, 3, 4];
const object = { one: 1, two: 2, three: 3, four: 4 };

const newArray = [...array, 5];
console.log(newArray);
// output: [ 1, 2, 3, 4, 5 ]

const [numberOne, numberTwo, ...arrayRemainNumbers] = newArray;
console.log(numberOne, numberTwo);
// output: 1 2
console.log(arrayRemainNumbers);
// output: [ 3, 4, 5 ]

const newObject = { ...object, five: 5 };
console.log(newObject);
// output: { one: 1, two: 2, three: 3, four: 4, five: 5 }

const { one, two, ...remainNumbers } = newObject;
console.log(one, two);
// output: 1 2
console.log(remainNumbers);
// output: { three: 3, four: 4, five: 5 }
