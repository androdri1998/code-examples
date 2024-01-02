const person = {
  name: "John Doe",
  age: 21,
};

const template = `
  ${person.name}
            has 
                            ${person.age} years old
`;

console.log(template);
// output:
//   John Doe
//            has
//                            21 years old
