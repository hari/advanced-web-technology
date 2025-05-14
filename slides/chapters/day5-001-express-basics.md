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
const server = express();

server.get('/', (request, response) => {
  response.send('Hello World');
});

server.listen(3000, () => console.log('Server running on port 3000'));
```

```bash
node index.js
```
