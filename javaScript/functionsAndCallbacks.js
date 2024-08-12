// 1. Function Declaration

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet("Sohail"));

// const greet = function (name) {
//   return `Hello, ${name}!`;
// };

// console.log(greet("Shubham"));

// const greet = () => {
//   const greeting = `Hello!`;
//   console.log(greeting);
//   return greeting;
// };

// console.log(greet());

// (function () {
//   console.log("This is an IIFE!");
// })();

// ! A higher-order function is a function that takes another function as an argument or returns a function:

// function hello(name) {
//   console.log(name());
//   // return "hello";
// }

// function shubham() {
//   return "hello, i am shubham";
// }

// hello(shubham);

// * A callback function is passed as an argument to another function and is executed inside that function.

// function myFunction(callback) {
//   console.log(callback());
//   return "Hello, I am returning a Callback!";
// }

// function sing() {
//   return "music.........";
// }

// // let sing = "hey";

// myFunction(sing);

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

// ! Sync and Async

// * Synchronous Operations: These are operations that block the execution until they are completed.
// ? Asynchronous Operations: These allow the program to continue executing other code while waiting for the operation to complete.

// ! Common Asynchronous JavaScript APIs
// setTimeout and setInterval
// XMLHttpRequest / Fetch API
// Event Listeners
// Promises
// Async/Await

// console.log("Start");

// setTimeout(() => {
//   console.log("This is a callback function");
// }, 2000);

// console.log("End");

// document.getElementById("myButton").addEventListener("click", function () {
//   alert("Button was clicked!");
// });

// ! When dealing with multiple asynchronous operations that depend on each other, you can end up with deeply nested callbacks, often referred to as "callback hell".

// doSomething(function (result1) {
//   doSomethingElse(result1, function (result2) {
//     doAnotherThing(result2, function (result3) {
//       doFinalThing(result3, function (result4) {
//         console.log("All done!");
//       });
//     });
//   });
// });

// Callback Hell

function getUser(userId, callback) {
  setTimeout(() => {
    console.log("Fetched user");
    callback({ userId: userId, name: "John Doe" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched Posts");
    callback([
      { postId: 1, content: "Post 1" },
      { postId: 2, content: "Post 2" },
    ]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("Fetched comments for post " + postId);
    callback([
      { commentId: 1, text: "Nice Post!" },
      { commentId: 2, text: "Thanks everyone!" },
    ]);
  }, 1000);
}

getUser(1, (user) => {
  getPosts(user.userId, (posts) => {
    posts.forEach((post) => {
      getComments(post.postId, (comments) => {
        console.log("User:", user.name);
        console.log("Post:", post.content);
        console.log("Comments:", comments);
      });
    });
  });
});
