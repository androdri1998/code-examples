// rest parameters
function logNumbers(...params) {
  // spread syntax
  console.log(...params);

  // spread syntax
  const [one, two, ...others] = params;
  console.log(one, two, others);
  console.log(...others);
}

logNumbers(1, 2, 3, 4, 5);
// output:
// 1 2 3 4 5
// 1 2 [ 3, 4, 5 ]
// 3 4 5

const obj = {
  first: 1,
  second: 2,
  third: 3,
};
console.log(obj);
// output:
// { first: 1, second: 2, third: 3 }

// spread syntax
const newObj = { ...obj, fourth: 4 };
console.log(newObj);
// output:
// { first: 1, second: 2, third: 3, fourth: 4 }
