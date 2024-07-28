this.count = 4;

function showCounter() {
  console.log(this.count);
}

const showCounterArrow = () => {
  console.log(this.count);
};

const counter1 = {
  count: 5,
  show: showCounter,
};
counter1.show();

const counter2 = {
  count: 6,
  show: showCounter,
};
counter2.show();

const counter3 = {
  count: 7,
  show: () => {
    showCounterArrow();
  },
};
counter3.show();
