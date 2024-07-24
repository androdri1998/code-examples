const count = (number) => {
  if (number < 0) {
    return;
  }

  console.log(number);
  count(number - 1);
};

count(10);

// calls:      output:
// count(10)   10
// count(9)    9
// count(8)    8
// count(7)    7
// count(6)    6
// count(5)    5
// count(4)    4
// count(3)    3
// count(2)    2
// count(1)    1
// count(0)    0
// count(-1)   undefined
