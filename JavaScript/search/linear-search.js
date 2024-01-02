const linearSearch = (array, value) => {
  let itemIndex = null;
  for (let index = 0; index < array.length; index++) {
    if (value === array[index]) {
      itemIndex = index;
      break;
    }
  }

  return itemIndex;
};

console.log(linearSearch([1, 50, 30, 40, 23, 14, 19], 40));
// output: 3
console.log(linearSearch([1, 50, 30, 40, 23, 14, 19], 100));
