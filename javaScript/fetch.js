// ! The fetch() method in JavaScript is a modern way to make asynchronous HTTP requests. It is a part of the Fetch API, which provides a more powerful and flexible feature set for fetching resources, such as network requests, compared to the older XMLHttpRequest object.

// (CRUD) => Create, Read, Update, Delete;
// HTTPs Request => POST, GET, PUT, Delete

// * The fetch() method returns a Promise that resolves to the Response object representing the response to the request. The Response object contains methods to extract the data from the response, such as .json(), .text(), or .blob()

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => document.write(data.title))
  .catch((error) => console.error("ERROR", error));

// POST

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
