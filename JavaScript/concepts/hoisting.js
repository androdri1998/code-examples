firstFunction();
// output: Function declared with function

function firstFunction() {
  console.log("Function declared with function");
}

firstFunction();
// output: Function declared with function

try {
  secondFunction();
} catch (err) {
  console.log(err.message);
  // output: Cannot access 'secondFunction' before initialization
}

const secondFunction = () => {
  console.log("Function declared with const");
};

secondFunction();
// output: Function declared with const
