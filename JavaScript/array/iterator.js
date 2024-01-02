const array = [1, 2, 3, 4, 5];

const arrayIterator = array.values();

let currentValue = arrayIterator.next();
while (!currentValue.done) {
  console.log(currentValue.value);
  // output: 1
  // output: 2
  // output: 3
  // output: 4
  // output: 5

  currentValue = arrayIterator.next();
}

console.log(currentValue);
// output: { value: undefined, done: true }
