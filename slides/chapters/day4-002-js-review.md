---
theme: seriph
background: #f5f5f5
title: JavaScript Basics
layout: center
info: |
  ## JavaScript Basics
  Modern JavaScript for developers of all levels.
drawings:
  persist: false
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: false
colorSchema: 'light'
favicon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
pollSettings:
  anonymous: true
---

# JavaScript Review Part 2

<div class="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
  <div class="flex items-center gap-2">
    <div class="i-carbon-select-window text-yellow-600"></div>
    <span class="font-bold">DOM Manipulation</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="i-carbon-event text-yellow-600"></div>
    <span class="font-bold">Events & Event Handling</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="i-carbon-code text-yellow-600"></div>
    <span class="font-bold">Asynchronous JavaScript</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="i-carbon-code-reference text-yellow-600"></div>
    <span class="font-bold">Modern JavaScript & TypeScript</span>
  </div> 
</div>

---
layout: center
---

# DOM Manipulation

<div class="grid grid-cols-1 gap-6">
  <div>
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-select-window text-yellow-600"></div>
        <span class="font-bold">Selecting Elements</span>
      </div>

```javascript
// Get single element
const title = document.getElementById("title");
const button = document.querySelector(".btn-primary");

// Get multiple elements
const paragraphs = document.querySelectorAll("p");
const items = document.getElementsByClassName("item");
```
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: center
---

# DOM Manipulation

<div class="grid grid-cols-1 gap-6">
  <div>
    <div>
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-edit text-yellow-600"></div>
        <span class="font-bold">Modifying Elements</span>
      </div>
      
```javascript
// Content and attributes
element.textContent = "New text";
element.innerHTML = "<span>HTML content</span>";
element.setAttribute("id", "newId");

// Styles and classes
element.style.color = "blue";
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("selected");
```
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: center
---

# DOM Manipulation

<div class="grid grid-cols-1 gap-6">
  <div>
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-tree-view text-blue-700"></div>
        <span class="font-bold">Creating & Removing Elements</span>
      </div>
      
```javascript
// Create new element
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new here";

// Add to DOM
parentElement.appendChild(newDiv);
parentElement.insertBefore(newDiv, referenceElement);

// Remove from DOM
element.remove();
parentElement.removeChild(childElement);
```
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: center
---

# DOM Manipulation

<div class="grid grid-cols-1 gap-6">
  <div>
      <div class="flex items-center gap-2">
        <div class="i-carbon-idea text-purple-700"></div>
        <span class="font-bold">DOM Traversal</span>
      </div>
      
```javascript
// Parent and children
const parent = element.parentElement;
const children = element.children;
const firstChild = element.firstElementChild;

// Siblings
const next = element.nextElementSibling;
const prev = element.previousElementSibling;
```
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: center
---

# Events & Event Handling

<div class="grid grid-cols-1 gap-6">
  <div>
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-event text-yellow-600"></div>
        <span class="font-bold">Adding Event Listeners</span>
      </div>

```javascript
// Basic event listener
button.addEventListener("click", function() {
  alert("Button clicked!");
});

// With arrow function
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});

// Remove event listener
element.removeEventListener("click", handlerFunction);
```
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: center
---

# Events & Event Handling

<div class="grid grid-cols-1 gap-6">
  <div>
    <div>
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-flow text-yellow-600"></div>
        <span class="font-bold">Event Propagation</span>
      </div>
      
```javascript
// Event bubbling (default)
child.addEventListener("click", (e) => {
  console.log("Child clicked");
});

parent.addEventListener("click", (e) => {
  console.log("Parent clicked");
});

// Stop propagation
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Only child");
});
```
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: center
---

# Events & Event Handling

<div class="grid grid-cols-1 gap-6">
  <div>
    <div class="flex items-center gap-2 mb-2">
      <div class="i-carbon-information text-blue-700"></div>
      <span class="font-bold">Common Events</span>
    </div>
    <div class="grid grid-cols-2 gap-2 bg-blue-50 rounded-lg p-4 border border-blue-200" >
      <div>
        <p class="font-bold text-sm m-0!">Mouse Events</p>
        <ul class="text-xs space-y-1">
          <li><code>click</code></li>
          <li><code>dblclick</code></li>
          <li><code>mouseover</code></li>
          <li><code>mouseout</code></li>
        </ul>
      </div>
      <div>
        <p class="font-bold text-sm m-0!">Form Events</p>
        <ul class="text-xs space-y-1">
          <li><code>submit</code></li>
          <li><code>input</code></li>
          <li><code>change</code></li>
          <li><code>focus</code>/<code>blur</code></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: center
---

# Events & Event Handling

<div class="grid grid-cols-1 gap-6">
  <div>
       <div class="flex items-center gap-2">
        <div class="i-carbon-warning text-yellow-700"></div>
        <span class="font-bold">Event Delegation</span>
      </div>
      
```javascript
// Instead of adding listeners to each button
document.querySelector(".button-container")
  .addEventListener("click", (e) => {
    if (e.target.matches(".btn")) {
      console.log("Button clicked:", e.target.id);
    }
  });
```
    <p class="text-xs mt-1">Event delegation improves performance by using a single listener for multiple elements.</p>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: center
---

# Asynchronous JavaScript

<div class="grid grid-cols-1 gap-6">
  <div>
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-time text-yellow-600"></div>
        <span class="font-bold">Callbacks & Timers</span>
      </div>

```javascript
// Callback pattern
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData(result => console.log(result));

// Timers
setTimeout(() => console.log("Delayed"), 1000);
const intervalId = setInterval(() => {
  console.log("Repeating");
}, 2000);
clearInterval(intervalId);
```
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>

---
layout: center
---

# Asynchronous JavaScript

<div class="grid grid-cols-1 gap-6">
  <div>
    <div>
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-api text-yellow-600"></div>
        <span class="font-bold">Fetch API</span>
      </div>
      
```javascript
// Using promises
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Using async/await
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>

---
layout: center
---

# Asynchronous JavaScript

<div class="grid grid-cols-1 gap-6">
  <div>
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-information text-blue-700"></div>
        <span class="font-bold">Promises</span>
      </div>
      
```javascript
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation succeeded");
  } else {
    reject("Operation failed");
  }
});

// Promise methods
Promise.all([promise1, promise2])
  .then(results => console.log(results));

Promise.race([promise1, promise2])
  .then(firstResult => console.log(firstResult));
```
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>

---
layout: center
---

# Async, Await & Promises

<div class="grid [&_pre]:bg-transparent grid-cols-1 md:grid-cols-2 gap-4">
  <div class="p-4 bg-purple-50 border border-purple-200 rounded-lg">
    <div class="font-bold text-purple-700 mb-2">Callback Hell 😵</div>
```js
getUser(id, function(user) {
  getPosts(user, function(posts) {
    getComments(posts[0], function(comments) {
      console.log(comments);
    });
  });
});
```
  </div>

  <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
    <div class="font-bold text-green-700 mb-2">Async/Await 😌</div>
```js
const user = await getUser(id);
const posts = await getPosts(user);
const comments = await getComments(posts[0]);
console.log(comments);
```
  </div>
</div>

<div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
  <div class="p-3 bg-purple-100 rounded-lg border border-purple-300">
    <div class="font-bold text-purple-700 mb-2">Async/Await</div>
    <ul class="text-sm list-disc pl-5 space-y-1">
      <li>Syntactic sugar over Promises</li>
      <li>Cleaner and easier to read for sequential code</li>
      <li>Use with <code>try/catch</code> for error handling</li>
    </ul>
  </div>
  <div class="p-3 bg-yellow-100 rounded-lg border border-yellow-300">
    <div class="font-bold text-yellow-700 mb-2">Promises</div>
    <ul class="text-sm list-disc pl-5 space-y-1">
      <li>Useful for chaining operations</li>
      <li>Can become messy if nested deeply</li>
      <li>Essential for concurrent tasks with <code>Promise.all()</code></li>
    </ul>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>

---
layout: center
---

# Modern JavaScript & TypeScript

<div class="grid grid-cols-1 gap-6">
  <div>
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-code-reference text-yellow-600"></div>
        <span class="font-bold">ES6+ Features</span>
      </div>

```javascript
// Destructuring
const { name, age } = user;
const [first, second] = array;

// Spread operator
const newArray = [...array, newItem];
const newObj = { ...obj, newProp: value };

// Template literals
const message = `Hello, ${name}! You are ${age} years old.`;

// Optional chaining
const city = user?.address?.city;
```
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>

---
layout: center
---

# Modern JavaScript & TypeScript

<div class="grid grid-cols-1 gap-6">
  <div>
    <div>
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-data-type text-yellow-600"></div>
        <span class="font-bold">TypeScript Basics</span>
      </div>
      
```typescript
// Type annotations
let name: string = "Alice";
let age: number = 30;
let active: boolean = true;

// Interfaces
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

// Functions with types
function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
```
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>

---
layout: center
---

# Modern JavaScript & TypeScript

<div class="grid grid-cols-1 gap-6">
  <div>
    <div class="flex items-center gap-2 mb-2">
      <div class="i-carbon-information text-blue-700"></div>
      <span class="font-bold">Modules</span>
    </div>      

```javascript
// Exporting
export const PI = 3.14159;
export function square(x) { return x * x; }
export default class Calculator { /* ... */ }

// Importing
import Calculator, { PI, square } from './math';
import * as math from './math';
```
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>

---
layout: center
---

# Modern JavaScript & TypeScript

<div class="grid grid-cols-1 gap-6">
  <div>
    <div class="flex items-center gap-2 mb-2">
      <div class="i-carbon-idea text-purple-700"></div>
      <span class="font-bold">Advanced TypeScript</span>
    </div>
      
```typescript
// Generics
function getFirst<T>(array: T[]): T {
  return array[0];
}

// Union types
type ID = string | number;

// Type guards
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value * 2;
}
```
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>
