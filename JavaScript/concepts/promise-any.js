const simulateDelay = ({ seconds }) => {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(seconds), seconds * 1000);
  });
};

const main = async () => {
  const firstPromise = simulateDelay({ seconds: 1 });
  const secondPromise = simulateDelay({ seconds: 2 });
  const thirdPromise = simulateDelay({ seconds: 3 });
  const fourthPromise = simulateDelay({ seconds: 4 });
  const fifthPromise = simulateDelay({ seconds: 5 });

  const result = await Promise.any([
    fifthPromise,
    fourthPromise,
    thirdPromise,
    secondPromise,
    firstPromise,
  ]);

  console.log(result);
  // output: 1
};

main();
