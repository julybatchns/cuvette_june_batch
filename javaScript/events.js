// ! JavaScript events are actions or occurrences that happen in the system being programmed, which JavaScript can respond to. Events are an essential part of web development because they allow developers to create interactive and dynamic web pages.

// ? Mouse Events
// ? Key Events
// ? Form Events
// ? Windows Events
// ? Touch Events
// ? Custom Events

// * Click
document.addEventListener("DOMContentLoaded", function () {
  // const button = document.getElementById("btn");
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log(event);
      // console.log(`Key Pressed ${event.key}`);
      // alert("Form Submitted");
    });
});
