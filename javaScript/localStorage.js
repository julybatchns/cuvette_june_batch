localStorage.setItem("userName", "Kudrat");
localStorage.setItem("age", "24");

let name = localStorage.getItem("username");
let age = localStorage.getItem("age");
console.log(`Name: ${name}, Age: ${age}`);

localStorage.removeItem("age");

localStorage.clear();
