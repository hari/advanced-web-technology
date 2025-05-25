---
theme: seriph
background: #f5f5f5
title: React + ES6 Basics
info: |
  # React + ES6 Basics
  Modern UI development with React and ES6+ JavaScript.
layout: center
colorSchema: 'light'
favicon: https://cdn-icons-png.flaticon.com/512/1126/1126012.png
---

# React: The UI Game Changer

> The "R" in the MERN stack

---
layout: center
---

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">What is React?</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>JavaScript library for building <b>user interfaces</b></li>
      <li>Component-based, declarative, fast</li>
      <li>Maintained by Meta (Facebook)</li>
      <li>Used by Instagram, Netflix, WhatsApp, Uber, etc.</li>
    </ul>
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600" v-click>
    <h3 class="font-bold mb-2">Why React?</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Reusable components = faster dev</li>
      <li>Virtual DOM = blazing fast updates</li>
      <li>Massive ecosystem & community</li>
      <li>Code once, reuse everywhere (web, native)</li>
      <li>Lots of jobs 💰</li>
    </ul>
  </div>
</div>

---
layout: center
---

# React: A Brief History

<ul class="list-disc pl-6 space-y-1">
  <li> Before React: jQuery everywhere, logic + UI tightly coupled</li>
  <li> 2013: React introduced at JSConf by Facebook</li>
  <li> JSX was hated, then loved for speed & logic</li>
  <li> Popularized: <b>Virtual DOM</b>, <b>Components</b>, <b>Unidirectional Data Flow</b></li>
</ul>

<div class="p-4 bg-purple-100 rounded-lg border border-purple-600 mt-4" v-click>
  <b>It changed how the world builds UIs.</b>
</div>

---
layout: center
---

# Before We Start: ES6+ Essentials

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-yellow-600">
    <b>Arrow Function</b><br/>

```js
const greet = (name) => `Hello, ${name}`;
```
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>Shorter than <code>function</code></li>
      <li>Keeps <code>this</code> context</li>
    </ul>
  </div>

  <div class="p-4 rounded-lg border border-pink-600" v-click>
    <b>Callback Function</b><br/>
```js
const handleClick = () => alert("Clicked!");
<button onClick={handleClick}>Click me</button>
```
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>Passed as value to another function</li>
      <li>Used for events, async, etc.</li>
    </ul>
  </div>

  <div class="p-4 rounded-lg border border-green-600" v-click>
    <b>Destructuring</b><br/>
```js
const user = { name: "Aadhya", age: 1 };
const { name, age } = user;
```
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>Pull values from objects/arrays</li>
      <li>Cleaner props/hooks in React</li>
    </ul>
  </div>

  <div class="p-4 rounded-lg border border-lime-600" v-click>
    <b>Ternary Operator</b><br/>
```js
const loggedIn = true;
const text = loggedIn ? "Logout" : "Login";
```
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>One-liner if/else</li>
      <li>Used in JSX rendering</li>
    </ul>
  </div>
</div>

---
layout: center
---

# ES6+ Essentials

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-orange-600">
    <b>Template Literals</b><br/>
```js
const name = "Rema";
console.log(`Hello, ${name}!`);
```
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>Backticks <code>`</code> with <code>${}</code></li>
      <li>Readable JSX & dynamic values</li>
    </ul>
  </div>

  <div class="p-4 rounded-lg border border-red-600" v-click>
    <b>Default Parameters</b><br/>
```js
const greet = (name = "Guest") => `Hello, ${name}!`;
```
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>Set default values for function parameters</li>
    </ul>
  </div>

  <div class="p-4 rounded-lg border border-blue-600" v-click>
    <b>Spread Operator</b><br/>
```js
const base = { role: "student" };
const full = { ...base, name: "Saanvi" };
```
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>Copy/merge objects & arrays</li>
      <li>Everywhere in React</li>
    </ul>
  </div>

  <div class="p-4 rounded-lg border border-purple-600" v-click>
    <b>Rest Parameters</b><br/>
```js
const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
```
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>Collects multiple arguments into an array</li>
      <li>Used in React for props</li>
    </ul>
  </div>
</div>

---
layout: center
---

# You're Ready!

<div class="p-4 bg-green-100 rounded-lg border border-green-600 text-lg">
  You now understand the <b>language tools</b> to build real React apps.<br/>
  <span class="text-blue-700">Let's write some components!</span>
</div>

---
layout: center
---

# Setting Up Your First React App

<div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
  <b>Vite + React Setup</b><br/>
```bash
npm create vite@latest react-intro -- --template react
cd react-intro
npm install
npm run dev
```
  <div class="mt-2">✅ You now have a blazing-fast React project!</div>
</div>

---
layout: center
---

# File Structure (Vite + React)

```
react-intro/
├── index.html
├── main.jsx
├── App.jsx
├── components/
```

<ul class="list-disc pl-6 mt-4">
  <li>Define reusable components</li>
  <li>Pass data using <code>props</code></li>
</ul>

---
layout: center
---

# JSX vs HTML

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <b>JSX Example</b><br/>

```jsx
const Hello = () => <h1>Hello, World</h1>;
```

  <ul class="list-disc pl-4 text-sm mt-2">
    <li>JSX uses <code>className</code>, not <code>class</code></li>
    <li>Write JS inside <code>{}</code></li>
  </ul>
</div>
  <div class="p-4 bg-pink-100 rounded-lg border border-pink-600">
    <b>JSX ≠ HTML</b><br/>
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>JSX looks like HTML but is just JavaScript</li>
      <li>Can use all JS features</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Defining Your First Component

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <b>Function Component</b><br/>
```jsx
function Welcome() {
  return <h2>Welcome to React!</h2>;
}
```
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <b>Arrow Function Component</b><br/>
```jsx
const Welcome = () => <h2>Welcome to React!</h2>;
```
  </div>
</div>

<div class="mt-4">
  Use inside <code>App.jsx</code> like:
```jsx
<Welcome />
```
</div>

---
layout: center
---

# Props: Passing Data

```jsx
const Greet = (props) => <p>Hello, {props.name}!</p>;
<Greet name="Aadhya" />
```

<div class="text-sm mt-2 grid grid-cols-2 gap-2">
  <p class="bg-yellow-100 rounded-lg border border-yellow-600 p-2 !m-0" v-click>Props are read-only</p>
  <p class="bg-pink-100 rounded-lg border border-pink-600 p-2 !m-0" v-click>Think of them as function parameters</p>
  <p class="bg-green-100 rounded-lg border border-green-600 p-2 !m-0" v-click>Remember attributes in HTML?</p>
  <p class="bg-blue-100 rounded-lg border border-blue-600 p-2 !m-0" v-click>Passed from parent to child</p>
</div>

---
layout: center
---

# Mini Challenge

<div class="p-4 rounded-lg border border-blue-600">
  <b>Create a <code>Quote</code> component:</b>
  <ul class="list-disc pl-4 mt-2">
    <li>Accepts <code>text</code> and <code>author</code> props</li>
    <li>Renders them inside a styled card</li>
  </ul>
  <div class="mt-2">Example:</div>
```jsx
<Quote text="Stay hungry." author="Steve Jobs" />
```
</div>
