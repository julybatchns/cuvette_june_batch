// ! The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM provides a structured representation of the document, and it defines a way that the structure can be accessed from programs so they can change the document structure, style, and content.

// ? What is DOM?
// Document: The HTML document that is being rendered by the browser.
// Object: The document is represented as objects (elements) that can be manipulated.
// Model: The objects form a tree structure.

// ! 2. Tree Structure of the DOM
// The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. The nodes can be elements, attributes, text, etc.

// Root Node: The root of the tree is the document object.
// Element Nodes: Each HTML element is an element node.
// Text Nodes: The text inside HTML elements is a text node.
// Attribute Nodes: The attributes of HTML elements are attribute nodes.

// * Finding the Elements in Document (HTML)

// ! getElementById
// const header = document.getElementById("header");
// console.log(header.textContent);

// ! getElementsByClassName
// const paragraphs = document.getElementsByClassName("content"); []
// console.log(paragraphs[0].innerText);

// ! getElementsByTagName
// const span = document.getElementsByTagName("span");
// span.style.backgroundColor = "red";

// ! querySelector
// const header = document.querySelectorAll(".content");
// console.log(header.length);

const container = document.getElementById("container");
container.innerText = `<p>New Content</p>`;
