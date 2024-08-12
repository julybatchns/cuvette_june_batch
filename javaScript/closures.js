// ! Functions
// ! Execution Context
// ! Scope

// * In JavaScript, a closure is a function that remembers the environment (the scope) in which it was created, even after that environment has gone away. Closures are a powerful feature and are often used to create private variables or functions.

function outerFunction() {
  var outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const myClosure = innerFunction; // F
myClosure();





