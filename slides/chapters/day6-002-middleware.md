---
theme: seriph
background: #f5f5f5
title: Middleware & Auth Essentials
layout: center
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: false
colorSchema: 'light'
favicon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
---

# Middleware: The Backbone of Express Apps

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">What is Middleware?</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Functions that run <b>before</b> your route handler</li>
      <li>Can modify <code>req</code> and <code>res</code> objects</li>
      <li>Control the flow of requests</li>
    </ul>
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Why Use Middleware?</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Authentication & Authorization</li>
      <li>Input validation & sanitization</li>
      <li>Logging & analytics</li>
      <li>Error handling</li>
      <li>Serving static files</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Anatomy of Middleware

```js
function middleware(req, res, next) {
  // Do something with req or res
  next(); // Pass control to next middleware
}

app.use(middleware); // Global
app.get('/route', middleware, handler); // Route-specific
```

- <b>Order matters</b>: Middleware runs in the order you declare it
- <b>Chaining</b>: You can have as many as you want
- <b>next()</b> is crucial: call it to continue, or the request hangs

---
layout: center
---

# Types of Middleware

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-purple-100 rounded-lg border border-purple-600">
    <h3 class="font-bold mb-2">Application-level</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Registered on <code>app</code> via <code>app.use()</code></li>
      <li>Runs for every request (unless path-limited)</li>
    </ul>
  </div>
  <div class="p-4 bg-teal-100 rounded-lg border border-teal-600">
    <h3 class="font-bold mb-2">Router-level</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Attached to <code>express.Router()</code> instances</li>
      <li>Scoped to specific routes</li>
    </ul>
  </div>
  <div class="p-4 bg-orange-100 rounded-lg border border-orange-600">
    <h3 class="font-bold mb-2">Error-handling</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Signature: <code>(err, req, res, next)</code></li>
      <li>Handles errors from other middleware/routes</li>
    </ul>
  </div>
  <div class="p-4 bg-lime-100 rounded-lg border border-lime-600">
    <h3 class="font-bold mb-2">Built-in & 3rd-party</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li><code>express.json()</code>, <code>express.static()</code></li>
      <li>3rd-party: <code>cors</code>, <code>helmet</code>, <code>morgan</code></li>
    </ul>
  </div>
</div>

---
layout: center
---

# Middleware Chaining & Flow

```js
app.use(express.json());
app.use(logger);
app.use(authCheck);

app.get('/quotes', getQuotes);
```

- Each middleware can <b>modify</b> the request/response
- If you skip <code>next()</code>, the chain breaks
- You can have <b>unlimited</b> middleware (but keep it maintainable)

---
layout: center
---

# Example: Logger & Auth Middleware

```js
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}]`, req.method, req.url);
  next();
}

function authCheck(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

app.use(logger);
app.use(authCheck);
```

---
layout: center
---

# Error Handling Middleware

```js
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
}

app.use(errorHandler);
```

- Place <b>after</b> all other middleware/routes
- Catches errors and sends a clean response
- Has four parameters

---
layout: center
---

# Key Takeaways

- Middleware powers everything in Express
- Use them for security, validation, logging, and more
- Order and chaining matter
- Understand the `next` function
- Handle errors and auth with proper status codes
