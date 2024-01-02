const array = [1, 2, 3, 5, 4];

console.log(array);
// output: [ 1, 2, 3, 5, 4 ]

[array[3], array[4]] = [array[4], array[3]];

console.log(array);
// output: [ 1, 2, 3, 4, 5 ]
