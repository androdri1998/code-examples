const multiplyBy = (multiplier) => {
  return (value) => {
    return value * multiplier;
  };
};

const multiplyBy2 = multiplyBy(2);
const multiplyBy3 = multiplyBy(3);

const applyCalc = (calc, values = []) => {
  const newValues = values.map(calc);

  return newValues;
};

const values = [1, 2, 3];
console.log(applyCalc(multiplyBy2, values));
// [ 2, 4, 6 ]
console.log(applyCalc(multiplyBy3, values));
// [ 3, 6, 9 ]
