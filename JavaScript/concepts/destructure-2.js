// array
const arr = [1, 2, 3];
const [one, two, three] = arr;
console.log("array", one, two, three);
// output: array 1 2 3

// object
const obj = { first: 1, second: 2, third: 3 };
let { first, second, nonExistent } = obj;
console.log("object", first, second, nonExistent);
// output: object 1 2 undefined

// rename object destructuring
const { third: newThird } = obj;
console.log("object destructuring", newThird);
// output: object destructuring 3
