const myArray = [1, 2, 3, 4, 5];

function* readArray(array) {
  for (let index = 0; index < array.length; index++) {
    yield array[index];
  }
}

const arrayReader = readArray(myArray);
let currentValue = arrayReader.next();
while (!currentValue.done) {
  console.log(currentValue.value);
  // output: 1
  // output: 2
  // output: 3
  // output: 4
  // output: 5

  currentValue = arrayReader.next();
}

console.log(currentValue);
// output: { value: undefined, done: true }
