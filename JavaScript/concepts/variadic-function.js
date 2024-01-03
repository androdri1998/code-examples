const variadicFunction = (...params) => {
  for (let value of params) {
    console.log(value);
    // output: value 1
    // output: value 2
    // output: value 3
    // output: value 4
    // output: value 5
    // output: value 6
    // output: value 7
  }
};

variadicFunction(
  "value 1",
  "value 2",
  "value 3",
  "value 4",
  "value 5",
  "value 6",
  "value 7"
);
