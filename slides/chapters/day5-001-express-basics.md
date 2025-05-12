---
theme: seriph
background: #f5f5f5
title: ExpressJS Fundamentals
layout: center
class: text-center
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: false
colorSchema: 'light'
favicon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
pollSettings:
  anonymous: true
---

# ExpressJS Fundamentals

<div class="text-lg mt-4">
Your first <strong>backend server</strong><br>
Let's make the computer talk back.
</div>

---
layout: center
---

# What is ExpressJS?

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Key Features</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Minimal & flexible</li>
      <li>Node.js web framework</li>
      <li>Handles routing</li>
      <li>Middleware support</li>
    </ul>
  </div>
  
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Use Cases</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>REST APIs</li>
      <li>Web applications</li>
      <li>Single-page apps</li>
      <li>Real-time apps</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Basic Setup

```bash
npm init -y
npm install express
```

```js
// index.js
const express = require('express');
const app = express();

app.use(express.json()); // Middleware for JSON

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

```bash
node index.js
```

---

# Building a Quotes API

```js
// Initial setup
const express = require('express');
const app = express();
app.use(express.json());

// Data store
let quotes = [
  { id: 1, text: 'It works on my machine!' },
  { id: 2, text: 'I will start learning React tomorrow.' },
];

// GET all quotes
app.get('/quotes', (req, res) => {
  res.json(quotes);
});
```

---

# Write API
```js
app.post('/quotes', (req, res) => {
  const newQuote = { id: Date.now(), text: req.body.text };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

// DELETE quote
app.delete('/quotes/:id', (req, res) => {
  quotes = quotes.filter(q => q.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

<div class="space-y-4 mt-6">
  <div class="flex items-center gap-2 text-sm">
    <div class="i-carbon-idea text-yellow-500"></div>
    <span>Stateless</span> / <span>HTTP methods</span> / <span>RESTful</span> / <span>HTTP status codes</span>
  </div>
</div>

---
layout: center
---

# Testing the API

<div class="space-y-4 mt-6">
  <div class="flex items-center gap-2">
    <div class="i-carbon-code text-blue-700"></div>
    <span>Use Thunder Client (or Postman/Insomnia)</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="i-carbon-test-tool text-blue-700"></div>
    <span>Try GET, POST, DELETE</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="i-carbon-breaking-change text-blue-700"></div>
    <span>Break something and fix it</span>
  </div>
</div>

---
layout: center
---

# Route Naming Guidelines

<div class="text-left text-lg mt-4">
Consistent routes make our API easy to use, easy to guess, and easy to debug.
</div>

<div class="flex border border-yellow-200 items-center gap-2 mt-4 text-sm bg-yellow-50 p-2 rounded-lg">
  <div class="i-carbon-idea text-yellow-500"></div>
  <span>We will keep visiting this topic</span>
</div>

---
layout: center
---

# 1. Use Nouns, not Verbs
```diff
- /getUsers
+ /users
```

---
layout: center
---

# 2. Use Plural Names

```diff
- /user
+ /users
```

---
layout: center
---

# 3. HTTP Verbs and REST

| HTTP Verb | Action       | Example        |
|-----------|--------------|----------------|
| GET       | Read         | GET /tasks     |
| POST      | Create       | POST /tasks    |
| PUT       | Update       | PUT /tasks/1   |
| DELETE    | Delete       | DELETE /tasks/1|

---
layout: center
---

# 4. Path Parameters

```js
GET    /tasks       // All tasks
GET    /tasks/12    // Task with id 12
DELETE /tasks/12    // Delete task 12
```

---
layout: center
---

# 5. Keep it clean

```diff
- /Get-Users.php
+ /users
```

---
layout: center
---

# 6. Optional: Nested Routes

```js
GET /users/5/tasks    // Tasks for user 5
```

---
layout: center
---

# Quiz: Route Naming

<Poll question="Which is the best name for creating a new product?" :answers="['/addNewProduct', '/products/create', '/products', '/createProduct']" :correctAnswer="2" />

---
layout: center
---

# TL;DR: RESTful API Format

<div>

**Good**:
```
GET    /posts  
GET    /posts/:id  
POST   /posts  
DELETE /posts/:id
```

**Bad**:
```
/getAllPosts  
/removePost?id=1  
/addPost.php
```
</div>

---
layout: center
---

# Terms to Know

<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Express</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Middleware</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Routing</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">REST</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Endpoints</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">HTTP Methods</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Status Codes</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Request</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Response</div>
</div>
