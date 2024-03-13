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

  const result = await Promise.allSettled([
    fifthPromise,
    fourthPromise,
    thirdPromise,
    secondPromise,
    firstPromise,
  ]);

  console.log(result);
  // output:
  // [
  //   { status: 'fulfilled', value: 5 },
  //   { status: 'fulfilled', value: 4 },
  //   { status: 'fulfilled', value: 3 },
  //   { status: 'fulfilled', value: 2 },
  //   { status: 'fulfilled', value: 1 }
  // ]
};

main();
