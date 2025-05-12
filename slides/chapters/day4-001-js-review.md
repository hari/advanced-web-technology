---
theme: seriph
background: #f5f5f5
title: JavaScript Basics
layout: center
info: |
  ## JavaScript Basics
  Modern JavaScript for developers of all levels.
class: text-center
drawings:
  persist: false
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: false
colorSchema: 'light'
favicon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
---

# JavaScript

<div class="text-xl mb-4 opacity-90">
  <strong class="text-yellow-600">The language of the web</strong>
</div>

<div class="pt-6 flex justify-center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" class="h-20" />
</div>

---
layout: default
---

# Variables & Data Types

<div class="grid grid-cols-2 gap-6 mt-4">
  <div>
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-code text-yellow-600"></div>
        <span class="font-bold">Declaring Variables</span>
      </div>

```javascript
let name = "Alice";         // Can be reassigned
const age = 25;             // Cannot be reassigned
var legacy = true;          // Older syntax
```
    </div>
    <div>
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-data-type text-yellow-600"></div>
        <span class="font-bold">Common Data Types</span>
      </div>
      
```javascript
const text = "Hello";       // String
const num = 42;             // Number
const isActive = true;      // Boolean
const user = {              // Object
  name: "Bob", 
  age: 30
};
const colors = ["red", "blue"]; // Array
```
    </div>
  </div>
  
  <div>
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-information text-blue-700"></div>
        <span class="font-bold">Variable Scope</span>
      </div>
      <ul class="space-y-2">
        <li><strong class="text-green-700">let & const</strong>: Block scoped</li>
        <li><strong class="text-yellow-700">var</strong>: Function scoped</li>
      </ul>
      <div class="mt-4 text-sm">
        <div class="flex items-center gap-1">
          <div class="i-carbon-idea text-yellow-600"></div>
          <span>Always prefer <code>const</code> unless you need to reassign</span>
        </div>
      </div>
    </div>
    <div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
      <div class="flex items-center gap-2">
        <div class="i-carbon-warning text-yellow-700"></div>
        <span class="font-bold">Best Practice</span>
      </div>
      <p class="text-sm">Use descriptive variable names and consistent naming conventions (camelCase is standard in JavaScript).</p>
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full border border-green-600">Beginner</span>
</div>

---
layout: default
---

# More Data Types

<div class="grid grid-cols-2 gap-6">
  <section>
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-data-structured text-blue-700"></div>
      <span class="font-bold">Modern Collections</span>
    </header>
      
```javascript
// Set - unique values collection
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);
console.log([...uniqueNumbers]); // [1, 2, 3, 4]

// Map - key-value pairs (any type as key)
const userRoles = new Map();
userRoles.set('alice', 'admin');
userRoles.set('bob', 'editor');
console.log(userRoles.get('alice')); // 'admin'
```
  </section>
  
  <section>
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-data-reference text-blue-700"></div>
      <span class="font-bold">Specialized Collections</span>
    </header>
      
```javascript
// WeakMap - keys must be objects
const userMetadata = new WeakMap();
const user1 = { name: 'Alice' };
userMetadata.set(user1, { lastLogin: '2023-05-10' });

// WeakSet - contains only objects
const activeUsers = new WeakSet();
const user2 = { name: 'Bob' };
activeUsers.add(user2);
console.log(activeUsers.has(user2)); // true
```
  </section>
</div>

<div class="p-3 bg-blue-50 rounded-lg border border-blue-200 mt-4">
  <div class="flex items-center gap-2">
    <div class="i-carbon-information text-blue-700"></div>
    <span class="font-bold">When to Use What</span>
  </div>
  <div class="text-xs mt-2 grid grid-cols-2 gap-3">
    <div class="flex items-start">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-1.5"></span>
      <span><strong class="text-blue-700">Set</strong>: When you need unique values</span>
    </div>
    <div class="flex items-start">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-1.5"></span>
      <span><strong class="text-blue-700">Map</strong>: When keys aren't just strings</span>
    </div>
    <div class="flex items-start">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-1.5"></span>
      <span><strong class="text-blue-700">WeakMap/WeakSet</strong>: When memory management matters</span>
    </div>
    <div class="flex items-start">
      <span class="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-1.5"></span>
      <span><strong class="text-blue-700">Object/Array</strong>: For simpler use cases</span>
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border border-blue-600">Intermediate</span>
</div>




---
layout: default
---

# Conditionals

<div class="grid grid-cols-2 gap-6">
  <div>
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-decision-tree text-yellow-600"></div>
        <span class="font-bold">If Statements</span>
      </div>

```javascript
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Child");
}

// Ternary operator
const status = age >= 18 ? "Adult" : "Minor";
```
    </div>
    <div>
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-code text-yellow-600"></div>
        <span class="font-bold">Logical Operators</span>
      </div>
      
```javascript
// AND operator
if (age > 18 && hasID) {
  console.log("Can enter");
}

// OR operator
if (isVIP || hasTicket) {
  console.log("Welcome to the event");
}

// NOT operator
if (!isBanned) {
  console.log("Access granted");
}
```
    </div>
  </div>
  
  <div>
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-information text-blue-700"></div>
        <span class="font-bold">Switch Statement</span>
      </div>
      
```javascript
switch (fruit) {
  case "apple":
    console.log("Red fruit");
    break;
  case "banana":
    console.log("Yellow fruit");
    break;
  default:
    console.log("Unknown fruit");
}
```
    </div>
    <div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
      <div class="flex items-center gap-2">
        <div class="i-carbon-warning text-yellow-700"></div>
        <span class="font-bold">Best Practices</span>
      </div>
      <ul class="text-xs space-y-1 mt-1">
        <li>Use strict equality (<code>===</code>) to avoid type coercion</li>
        <li>Keep conditionals simple and readable</li>
        <li>Consider early returns to reduce nesting</li>
      </ul>
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full border border-green-600">Beginner</span>
</div>

---
layout: default
---

# Basic Loops

<div class="grid grid-cols-2 gap-6">
  <div>
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-repeat text-yellow-600"></div>
        <span class="font-bold">For Loop</span>
      </div>
      
```javascript
// For loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```
    </div>
    <div>
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-repeat text-yellow-600"></div>
        <span class="font-bold">While Loop</span>
      </div>
      
```javascript
// While loop
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
```
    </div>
  </div>
  
  <div>
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-information text-blue-700"></div>
        <span class="font-bold">Do-While Loop</span>
      </div>
      
```javascript
// Do-while loop
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);
```
    </div>
    <div>
      <div class="flex items-center gap-2">
        <div class="i-carbon-warning text-yellow-700"></div>
        <span class="font-bold">Loop Control</span>
      </div>
      <ul class="text-xs space-y-1 mt-1 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
        <li><strong>break</strong>: Exit the loop immediately</li>
        <li><strong>continue</strong>: Skip to the next iteration</li>
      </ul>
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full border border-green-600">Beginner</span>
</div>

---
layout: default
---

# Intermediate Loops & Iteration

<div class="grid grid-cols-2 gap-6">
  <div>
      <header class="flex items-center gap-2 mb-2">
        <div class="i-carbon-data-structured text-yellow-600"></div>
        <span class="font-bold">Iterating Collections</span>
      </header>
      
```javascript
// For...of loop (arrays, strings, etc.)
for (const color of ["red", "green", "blue"]) {
  console.log(color);
}

// For...in loop (object properties)
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
```
  </div>
  
  <div>
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-idea text-purple-700"></div>
      <span class="font-bold">Modern Array Methods</span>
    </header>
      
```javascript
// forEach - iterate over elements
numbers.forEach(n => console.log(n));

// map - transform elements
const doubled = numbers.map(n => n * 2);

// filter - select elements
const evens = numbers.filter(n => n % 2 === 0);

// reduce - accumulate values
const sum = numbers.reduce((total, n) => total + n, 0);
```
  </div>
</div>

  <div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
    <div class="flex items-center gap-2">
      <div class="i-carbon-information text-blue-700"></div>
      <span class="font-bold">When to Use What</span>
    </div>
    <ul class="text-xs mt-2 grid grid-cols-2 gap-3">
      <li class="flex items-start">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-1.5"></span>
        <span><strong class="text-blue-700">for</strong>: When you need index control</span>
      </li>
      <li class="flex items-start">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-1.5"></span>
        <span><strong class="text-blue-700">for...of</strong>: For arrays when index isn't needed</span>
      </li>
      <li class="flex items-start">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-1.5"></span>
        <span><strong class="text-blue-700">for...in</strong>: For object properties</span>
      </li>
      <li class="flex items-start">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-1.5"></span>
        <span><strong class="text-blue-700">Array methods</strong>: For declarative operations</span>
      </li>
    </ul>
  </div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border border-blue-600">Intermediate</span>
</div>

---
layout: center
title: Functions as Math
class: text-center
---

# Functions

<div class="text-xl mt-4">
  Let's compare programming functions with algebraic functions.
</div>

---
layout: center
---

# A Linear Function

### Math: `f(x) = 2x + 3`  
This means:  
> “Take an input `x`, double it, and add 3.”

### JS Equivalent:
```js
function f(x) {
  return 2 * x + 3;
}
console.log(f(4)); // 11
```

<div class="mt-4 text-blue-700 font-bold">Simple inputs, simple outputs.</div>

---
layout: center
---
# A Higher-Order Function

### Math Logic:
> Suppose `F(g) = g(2) + g(3)`  

F takes another function `g` and applies it.

### JS Version:
```js
function F(g) {
  return g(2) + g(3);
}

function square(x) {
  return x * x;
}

console.log(F(square)); // 4 + 9 = 13
```

> Higher-order functions take other functions as input.

---
layout: center
---

# Why It Matters

- Linear functions transform data
- Higher-order functions **control logic** or **combine behavior**
- This power is used in:
  - `.map()`, `.filter()`, `.reduce()`
  - React hooks (`useEffect`, `useCallback`)
  - Middleware in Express

---
layout: center
---

# Quiz Time

### What does this return?

```js
function double(x) {
  return x * 2;
}
function applyTwice(fn, value) {
  return fn(fn(value));
}
applyTwice(double, 3); // ??
```

<Poll question=" " :answers="['6', '9', '12', '18']" :correctAnswer="2" />

---
layout: center
---

# Final Note

> **A function is a box. You put something in, you get something out.**  
> Sometimes, the box takes other boxes.

---
layout: default
---

# Functions

<div class="grid grid-cols-2 gap-6">
    <section class="mb-4">
      <header class="flex items-center gap-2 mb-2">
        <div class="i-carbon-function text-yellow-600"></div>
        <span class="font-bold">Function Basics</span>
      </header>

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const sayBye = function(name) {
  return `Goodbye, ${name}!`;
};

// Arrow function
const welcome = (name) => `Welcome, ${name}!`;
```
    </section>
    <section>
      <header class="flex items-center gap-2 mb-2">
        <div class="i-carbon-parameter text-yellow-600"></div>
        <span class="font-bold">Parameters & Arguments</span>
      </header>
      
```javascript
// Default parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```
  </section>
</div>

<section>
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon-warning text-yellow-700"></div>
    <span class="font-bold">Function Types Comparison</span>
  </div>
  <div class="grid grid-cols-3 gap-2 mt-2">
    <div class="bg-white p-2 rounded shadow-sm border border-yellow-100">
      <div class="font-medium text-xs mb-1">Declaration</div>
      <div class="text-xs text-gray-700">Hoisted, can be called before defined</div>
    </div>
    <div class="bg-white p-2 rounded shadow-sm border border-yellow-100">
      <div class="font-medium text-xs mb-1">Expression</div>
      <div class="text-xs text-gray-700">Not hoisted, must be defined before use</div>
    </div>
    <div class="bg-white p-2 rounded shadow-sm border border-yellow-100">
      <div class="font-medium text-xs mb-1">Arrow</div>
      <div class="text-xs text-gray-700">Shorter syntax, no own <code>this</code> binding</div>
    </div>
  </div>
</section>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full border border-green-600">Beginner</span>
</div>

---
layout: default
---

# Functions

<div class="grid grid-cols-2 gap-6">
  <section>
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-information text-blue-700"></div>
      <span class="font-bold">Function Scope</span>
    </header>
      
```javascript
const global = "I'm global";

function outer() {
  const outerVar = "I'm in outer";
  
  function inner() {
    const innerVar = "I'm in inner";
    console.log(global, outerVar, innerVar);
  }
  
  inner();
}
```
  <p class="text-xs mt-2">Functions create their own scope and can access variables from parent scopes.</p>
  </section>

  <section>
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-function text-yellow-600"></div>
      <span class="font-bold">Advanced Techniques</span>
    </header>

```javascript
// Closures
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

// Higher-order functions
function repeat(fn, times) {
  return function(...args) {
    for (let i = 0; i < times; i++) {
      fn(...args);
    }
  };
}
```
  </section>
</div>


<div>
  <div class="flex items-center gap-2 mt-1">
    <div class="i-carbon-warning text-yellow-700"></div>
    <span class="font-bold">Arrow vs Regular Functions</span>
  </div>
  <div class="text-xs grid grid-cols-2 gap-2 mt-2">
    <div>Arrow functions don't have their own <code>this</code></div>
    <div>Arrow functions can't be used as constructors</div>
    <div>Arrow functions have implicit returns with single expressions</div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border border-blue-600">Intermediate</span>
</div>

---
layout: center
---

# Function terms

* **Function**: A block of code designed to perform a specific task.
* **Parameters**: Named variables listed in the function definition (inside parentheses).
* **Arguments**: Actual values passed to a function when it is invoked.
* **Return**: The output a function gives back to the caller.
* **Hoisting**: JavaScript's default behavior of moving declarations to the top of their scope before code execution.
* **Closure**: A function that retains access to its lexical (outer) scope even after the outer function has finished executing.
* **Arrow Functions**: A shorter syntax for writing functions, often with implicit returns.
* **Higher-Order Functions**: Functions that take other functions as arguments or return them as results.
* **Scope**: The region in code where a variable is accessible (e.g., global, function, block).
* **this**: Refers to the context object that a function is called on (varies depending on invocation).
* **Callback**: A function passed to another function to be executed later.

---
layout: center
---

# Terms to know

<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Number</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">String</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Boolean</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Null</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Undefined</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border opacity-50 border-blue-600 hover:bg-blue-200 transition-colors">Symbol</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border opacity-50 border-blue-600 hover:bg-blue-200 transition-colors">BigInt</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Object</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Array</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Map</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Set</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border opacity-50 border-green-600 hover:bg-green-200 transition-colors">WeakMap</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border opacity-50 border-green-600 hover:bg-green-200 transition-colors">WeakSet</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border opacity-50 border-purple-600 hover:bg-purple-200 transition-colors">Destructuring</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border opacity-50 border-purple-600 hover:bg-purple-200 transition-colors">Spread Operator</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border opacity-50 border-purple-600 hover:bg-purple-200 transition-colors">Rest Parameters</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border opacity-50 border-purple-600 hover:bg-purple-200 transition-colors">Template Literals</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Immutability</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Mutability</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Primitive vs Reference</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Type Coercion</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Truthy/Falsy</div>
</div>


