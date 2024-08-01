// ! In JavaScript, arrays are list-like objects used to store multiple values in a single variable. Arrays are zero-indexed, meaning the first element is at index 0.

// ? Creating an Array
// * Using array literal notation: []

let fruits = ["apple", "orange", "grapes"];

// * Using the Array constructor:
let fruitee = new Array("Apple", "Banana", "Mango");
// console.log(fruitee);

// * Creating an empty array and adding elements:
let vegetables = [];
vegetables[0] = "potato";
vegetables[1] = "tomato";
vegetables[2] = "peas";

// console.log(vegetables);

// Example Array
let array1 = [1, 2, 3, 4, 5];
// console.log(array1[0]);
// console.log(array1[3]);

// Array Methods

// 1. push()
let array2 = [56, 21, 32, 43, 53];
// array2.push(99);
// console.log(array2);

// 2. pop()
// array2.pop();
// console.log(array2);

// 3. shift()
// let firstNumber = array2.shift();
// console.log(firstNumber);
// console.log(array2);

// 4. unshift()
let sai = array2.unshift(101);
// console.log(arrayLength);
// console.log(array2);

// 5. concat()
let usa = ["john", "adam", "clarke"];
let india = ["Shubham", "OM", "Sanjay"];
let usaIndia = india.concat(usa);
// console.log(usaIndia);

// 6. slice
// let fewPeople = usaIndia.slice(1, 3);
// console.log(fewPeople);

// 6. splice
// usaIndia.splice(1, 3, "raja");
// console.log(usaIndia);

// 7. forEach()

// let hello = usaIndia.forEach(function (individual) {
//   console.log(individual);
// });

// console.log(hello);

// 7. map()

const numbers = [1, 2, 3, 4, 5];
const resultForEach = numbers.forEach((num) => num * 2);
// console.log(resultForEach);

const numberss = [1, 2, 3, 4, 5];
const resultMap = numberss.map((num) => num * 2);
// console.log(resultMap);

// Functions / Objects
// ! A function is a reusable block of code that performs a specific task. In JavaScript, functions can be declared using the function keyword or as function expressions.

// 1. Function Declaration // Normal // Regular
// function greet() {
//   console.log("Hello World!");
// }

// greet();

// Function Expression // Anonymous

// const greet = function () {
//   console.log("Hello World!");
// };

// greet();
// console.log(greet);

const greet = () => {
  console.log("Hello World!");
};

// greet();

// Parameterized Functions

function add(a, b) {
  return a + b;
  // console.log(a, b);
}
// console.log(add(2, 3));
// add(2, 3);

// Nested Functions

function outerFunction() {
  const outerVar = "I'm outside!"; // undefined

  const innerVar = "I'm inside!";
  function innerFunction() {
    console.log(outerVar); // "I'm outside!"
  }

  innerFunction();
  console.log(innerVar);
}

outerFunction();

// Callback Functions

function sayHello() {
  console.log("Hello World!");
}

setTimeout(sayHello, 4000);
