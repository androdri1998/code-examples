const thirdFunction = (values) => {
  console.log("thirdFunction - init");
  console.log("thirdFunction - ", values);
  console.log("thirdFunction - end");
};

const secondFunction = (values) => {
  console.log("secondFunction - init");
  console.log("secondFunction - ", values);
  console.log("secondFunction - end");
};

const firstFunction = (values) => {
  console.log("firstFunction - init");
  console.log("firstFunction - ", values);
  secondFunction(values);
  console.log("firstFunction - end");
};

const main = () => {
  console.log("main - init");
  const values = [1, 2, 3, 4, 5];
  firstFunction(values);
  thirdFunction(values);
  console.log("main - end");
};

main();
// output:
// main - init
// firstFunction - init
// firstFunction -  [ 1, 2, 3, 4, 5 ]
// secondFunction - init
// secondFunction -  [ 1, 2, 3, 4, 5 ]
// secondFunction - end
// firstFunction - end
// thirdFunction - init
// thirdFunction -  [ 1, 2, 3, 4, 5 ]
// thirdFunction - end
// main - end
