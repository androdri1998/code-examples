const fiveNumbers = [1, 2, 3, 4, 5];

function* multiplyBy(numbers, multiplicator) {
  for (let index = 0; index < numbers.length; index++) {
    yield numbers[index] * multiplicator;
  }
}

const arrayReader = multiplyBy(fiveNumbers, 10);
console.log(arrayReader.next());
// output: { value: 10, done: false }
console.log(arrayReader.next());
// output: { value: 20, done: false }
console.log(arrayReader.next());
// output: { value: 30, done: false }
console.log(arrayReader.next());
// output: { value: 40, done: false }
console.log(arrayReader.next());
// output: { value: 50, done: false }

console.log(arrayReader.next());
// output: { value: undefined, done: true }
