const readParams = (...params) => {
  const arrayParams = [];

  for (let index = 0; index < params.length; index++) {
    const item = params[index];
    console.log(item);
    // output: 1
    // output: 2
    // output: 3
    // output: 4
    // output: 5
    arrayParams.push(item);
  }

  return arrayParams;
};

const result = readParams(1, 2, 3, 4, 5);

const [one, two, ...remainNumbers] = result;
console.log(one, two);
// output: 1 2
console.log(remainNumbers);
// output: [ 3, 4, 5 ]
