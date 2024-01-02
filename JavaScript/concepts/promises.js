const createPromise = (milliseconds) =>
  new Promise((resolve, reject) => {
    // just to simulate some error
    if (milliseconds > 5000) {
      return reject(
        `Too slow to get an answer in ${milliseconds} milliseconds.`
      );
    }

    // just to simulate a delay at response
    setTimeout(() => {
      return resolve(
        `setTimeout of ${milliseconds} milliseconds, executed correctly.`
      );
    }, milliseconds);
  });

const tryCatchExecution = async (milliseconds) => {
  try {
    const promise = createPromise(milliseconds);
    const response = await promise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const thenCatchExecution = async (milliseconds) => {
  const promise = createPromise(milliseconds);
  promise
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};

tryCatchExecution(5000);
// outpur: setTimeout of 5000 milliseconds, executed correctly.
tryCatchExecution(7000);
// output: Too slow to get an answer in 7000 milliseconds.
thenCatchExecution(4000);
// outpur: setTimeout of 4000 milliseconds, executed correctly.
thenCatchExecution(6000);
// output: Too slow to get an answer in 6000 milliseconds.
