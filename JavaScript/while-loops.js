let array = [10, 20, 30, 40, 50];

// while
let index = 0;
while (index < array.length) {
  console.log(`while loop | index: ${index} value: ${array[index]}`);
  index++;
}
// while loop | index: 0 value: 10
// while loop | index: 1 value: 20
// while loop | index: 2 value: 30
// while loop | index: 3 value: 40
// while loop | index: 4 value: 50

// do … while
index = 0;
do {
  console.log(`do ... while loop | index: ${index} value: ${array[index]}`);
  index++;
} while (index < array.length);
// do ... while loop | index: 0 value: 10
// do ... while loop | index: 1 value: 20
// do ... while loop | index: 2 value: 30
// do ... while loop | index: 3 value: 40
// do ... while loop | index: 4 value: 50
