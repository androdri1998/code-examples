let array = [10, 20, 30, 40, 50];
// common for
for (let index = 0; index < array.length; index++) {
  console.log(`common for | index: ${index} value: ${array[index]}`);
}
// output:
// common for | index: 0 value: 10
// common for | index: 1 value: 20
// common for | index: 2 value: 30
// common for | index: 3 value: 40
// common for | index: 4 value: 50

// for … in
for (let index in array) {
  console.log(`for … in | index: ${index} value: ${array[index]}`);
}
// output:
// for … in | index: 0 value: 10
// for … in | index: 1 value: 20
// for … in | index: 2 value: 30
// for … in | index: 3 value: 40
// for … in | index: 4 value: 50

// for … of
for (let value of array) {
  console.log(`for … of | value: ${value}`);
}
// output:
// for … of | value: 10
// for … of | value: 20
// for … of | value: 30
// for … of | value: 40
// for … of | value: 50
