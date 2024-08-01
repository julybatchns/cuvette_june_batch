// ! In JavaScript, objects are one of the fundamental data structures used to store and manage data. You can add and remove properties from objects easily.

// ? Creating Objects

// const person = {};

// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 30;

// person.firstName = "Shubham";

// console.log(person);

// const animals = {
//   aquatic: "fish",
//   wild: "lion",
//   amphibian: "frog",
// };

// const animal = "aves";

// delete animals.amphibian

// console.log(animals["aquatic"]);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const details = {
//   age: 30,
//   email: "john.doe@example.com",
// };

// const mergedPerson = Object.assign({}, person, details);
// console.log(mergedPerson);

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// for (let key in person) {
//   console.log(key, person[key]);
// }

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// const keys = Object.keys(person);
// console.log(keys);
// keys.forEach((key) => {
//   console.log(key, person[key]);
// });

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// const values = Object.values(person);
// console.log(values);
// values.forEach((value) => {
//   console.log(value);
// });

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const entries = Object.entries(person);
console.log(entries);
entries.forEach(([key, value]) => {
  console.log(key, value);
});
