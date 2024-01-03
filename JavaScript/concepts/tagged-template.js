const object = {
  name: "books",
  amount: 10,
};

const taggedFunction = (texts, amount, objectName) => {
  return {
    texts,
    amount,
    objectName,
  };
};

const result = taggedFunction`I have ${object.amount} ${object.name} about programming`;

console.log(result);
// output:
// {
//   texts: [ 'I have ', ' ', ' about programming' ],
//   amount: 10,
//   objectName: 'books'
// }
