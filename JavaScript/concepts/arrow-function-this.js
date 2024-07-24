function functionWithThis() {
  this.setTimeout(() => {
    console.log(
      "this function with function reserved word and this was called"
    );
  }, 1000);
}
functionWithThis();

const constWithThis = () => {
  try {
    this.setTimeout(() => {
      console.log("this function with const and this was called");
    }, 1000);
  } catch (err) {
    console.log(err);
  }
};
constWithThis();
console.log("======================");
