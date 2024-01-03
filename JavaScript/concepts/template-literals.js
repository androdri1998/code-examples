const person = {
  description: "people",
  age: 25,
};

const template = `
  some ${person.description}
            are 
                            ${person.age} years old
`;

console.log(template);
// output:
//   some people
//             are
//                            25 years old
