// ! Asynchronous JavaScript allows you to perform tasks like fetching data from an API, reading files, or waiting for user interactions without blocking the execution of other code.

// ? Synchronous vs. Asynchronous

// * Synchronous Code: Executes line by line, waiting for each operation to complete before moving to the next.
// ? Asynchronous Code: Allows the program to continue executing without waiting for a task to complete.

// console.log("Start");
// setTimeout(() => {
//   console.log("This will print later");
// }, 1000);
// console.log("End");

// ! Callback Function: A function passed as an argument to another function and executed after some operation is completed.

// function getCheese(callback) {
//   setTimeout(() => {
//     const cheese = "🧀";
//     console.log("here is the cheese", cheese);
//     callback(cheese);
//   }, 2000);
// }

// function makeDough(cheese, callback) {
//   setTimeout(() => {
//     const dough = cheese + "🫓";
//     console.log("here is the dough", dough);
//     callback(dough);
//   }, 2000);
// }

// function bakePizza(dough, callback) {
//   setTimeout(() => {
//     const pizza = dough + "🍕";
//     console.log("here is the pizza", pizza);
//     callback(pizza);
//   }, 2000);
// }

getCheese((cheese) => {
  makeDough(cheese, (dough) => {
    bakePizza(dough, (pizza) => {
      console.log("got my beautiful pizza", pizza);
    });
  });
});

// ! Promises

// 1. Objects representing the eventual completion (or failure) of an asynchronous operation.
// 2. States: Pending, Fulfilled, Rejected.

// const ticket = new Promise(function (resolve, reject) {
//   const isBoarded = false;
//   if (isBoarded) {
//     resolve("You are not in the Flight");
//   } else {
//     reject("Your Flight has been cancelled");
//   }
// });

// ticket
//   .then((data) => {
//     console.log("Hurray,", data);
//   })
//   .catch((data) => {
//     console.log("my Bad", data);
//   })
//   .finally(() => {
//     console.log("I will be executed always.");
//   });

function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      resolve(cheese);
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🫓";
      resolve(dough);
      // reject("bad dough");
    }, 2000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 2000);
  });
}

// getCheese()
//   .then((cheese) => {
//     console.log("here is the cheese", cheese);
//     return makeDough(cheese);
//   })
//   .then((dough) => {
//     console.log("here is the dough", dough);
//     return bakePizza(dough);
//   })
//   .then((pizza) => {
//     console.log("got my beautiful pizza", pizza);
//   })
//   .catch((data) => {
//     console.log("Error Occured", data);
//   })
//   .finally(() => {
//     console.log("Process Ended");
//   });

async function orderPizza() {
  try {
    const cheese = await getCheese();
    console.log("here is the cheese", cheese);
    const dough = await makeDough(cheese);
    console.log("here is the dough", dough);
    const pizza = await bakePizza(dough);
    console.log("got my beautiful pizza", pizza);
  } catch (error) {
    console.log("Error occured", error);
  }
  console.log("Process Ended");
}

orderPizza();
