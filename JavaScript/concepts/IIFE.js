(function () {
  console.log("Function declared with function");
})();
// output: Function declared with function

(() => {
  console.log("Function declared with const");
})();
// output: Function declared with const

(async function () {
  console.log("Async function declared with function");
})();
// output: Async function declared with function

(async () => {
  console.log("Async function declared with const");
})();
// output: Async function declared with const
