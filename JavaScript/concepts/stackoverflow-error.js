const sumValues = (initialValue) => {
  console.log("value: ", initialValue);
  return sumValues(initialValue + 1);
};

sumValues(1);

// output:
// node:internal/console/constructor:308
//         if (isStackOverflowError(e))
//             ^

// RangeError: Maximum call stack size exceeded
//     at console.value (node:internal/console/constructor:308:13)
//     at console.log (node:internal/console/constructor:379:26)
