// index.js

// JavaScript was initially created to “make web pages alive”.

// The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.

// When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.

// But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.

// Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

// V8 – in Chrome
// SpiderMonkey – in Firefox.
// …There are other codenames like “Chakra” for IE, “JavaScriptCore”, “Nitro” and “SquirrelFish” for Safari, etc.

// alert("Hello World!");

// 1. Datatypes
// Primitive => string, number, undefined, null, BigInt, boolean, symbol.
// Non-Primitives => Object, Array

// 2. variables

// let, var, const

// ! "var"

// ? Scope: Function-scoped. If declared inside a function, it's accessible within that function. If declared outside any function, it's globally scoped.

// ! Re-declaration: You can re-declare a variable using var within the same scope without error.

// var name = "Shubham";
// console.log(name);

// function myFunction() {
//   return 2 + 2;
// }

// console.log(myFunction());
// var x = 100; // undefined

// var x = 100;
// var x = 200;
// console.log(x);
// function varExample() {
//   console.log(x); // undefined
//   // var x = 200; // x = undefined
//   // var y = 10;
// }

// console.log(x); // 100
// varExample();

// Execution Context => Memory Allocation // Execution Phase
// Hoisting in var

// function heyyy() {
//   var hello = 23;
// }

// console.log("Start");

// setTimeout(() => {
//   console.log("Heyyyyyyy");
// }, 0);

// console.log("hey Juneeeee");

// console.log("End");

// console.log(hello());
// console.log(x);

// var x = 10;

// function hello() {
//   return "hello";
// }
