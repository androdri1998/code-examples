const variadicFunction = (...params) => {
  for (let value of params) {
    console.log(value);
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
