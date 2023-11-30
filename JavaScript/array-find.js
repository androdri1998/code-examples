const array = [1, 2, 3, 4, 50, 6, 50, 8, 9, 10];

const compare = (number) => number > 20;
const index = array.find(compare);

console.log(index);
// output: 50
