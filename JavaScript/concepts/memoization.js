const multiplyBy = ({ values = [], multiplier, memo = new Map() }) => {
  if (values.length === 0) {
    return [];
  }

  const currentItem = values[0];

  let result;
  if (memo.has(currentItem)) {
    result = memo.get(currentItem);
    console.log("Found", currentItem, result);
    // Found 1 2
    // Found 2 4
    // Found 3 6
  } else {
    result = currentItem * multiplier;
    memo.set(currentItem, result);
    console.log("Not found", currentItem, result);
    // Not found 1 2
    // Not found 2 4
    // Not found 3 6
    // Not found 4 8
    // Not found 5 10
  }

  const response = multiplyBy({ values: values.slice(1), multiplier, memo });
  return [result, ...response];
};

const initialValue = [1, 2, 3, 4, 5, 1, 2, 3];
const multipliedValues = multiplyBy({
  values: initialValue,
  multiplier: 2,
});

console.log("Initial: ", initialValue);
// Initial:  [
//   1, 2, 3, 4,
//   5, 1, 2, 3
// ]
console.log("Result: ", multipliedValues);
// Result:  [
//   2, 4, 6, 8,
//  10, 2, 4, 6
// ]
