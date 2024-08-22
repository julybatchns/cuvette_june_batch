// * The call() method allows you to invoke a function with a specific this value and arguments. It's particularly useful when you want to borrow a method from one object and use it with another object.

// ! call(): Immediately invokes a function with a specific this context and arguments.

// ! functionName.call(thisArg, arg1, arg2, ...)

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person1 = { name: "Rohan" };
// const person2 = { name: "Shubham" };

// greet.call(person2, "Hello", "!");

// ! The bind() method creates a new function that, when invoked, has its this value set to a specific value. Unlike call(), bind() does not immediately execute the function. Instead, it returns a new function with the specified this value.

// * let boundFunction = functionName.bind(thisArg, arg1, arg2, ...)

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person1 = { name: "Rohan" };

// const greetRohan = greet.bind(person1, "Hello");
// console.log(greetRohan("!"));
// console.log(person1);

const person = {
  name: "Alice",
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}`);
  },
};

const person2 = { name: "Bob" };

// person.greet.call(person2, "Hi");
const greetBob = person.greet.bind(person2);
greetBob("Hello");
