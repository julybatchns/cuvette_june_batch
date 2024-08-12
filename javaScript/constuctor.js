// ! In JavaScript, a constructor is a special function used to create and initialize objects. It is typically used within classes to set initial properties and values when a new object is created.

// ? Constructor Function

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   };
// }

// const person1 = new Person("John", 30);
// const person2 = new Person("Shubham", 27);
// person2.greet();
// person1.greet();
// console.log(person1.name, person1.age);

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person();
// const person2 = new Person("Shubham", 27);
// person2.greet();
person1.greet();

// person1.age

// this = current object
