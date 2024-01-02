const person = {
  description: "people",
  age: 21,
};

const template = `
  some ${person.description}
            has 
                            ${person.age} years old
`;

console.log(template);
// output:
//   some people
//             has
//                            21 years old
