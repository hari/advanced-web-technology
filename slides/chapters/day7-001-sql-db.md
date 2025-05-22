---
theme: seriph
layout: center
class: text-center
background: #f5f5f5
title: "SQLite in Express"
colorSchema: 'light'
---

# CRUD with SQLite in Express

---
layout: center
---

# Quick Setup: SQLite + Express

<v-click>
```js
const db = require('better-sqlite3')('data.db');
db.prepare(`CREATE TABLE IF NOT EXISTS quotes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT NOT NULL
)`).run();
```
</v-click>
<v-click>
```js
server.get('/quotes', (request, response) => {
  const all = db.prepare('SELECT * FROM quotes').all();
  response.json(all);
});
```
</v-click>
<v-click>
```js
server.post('/quotes', (request, response) => {
  const { text } = request.body;
  const info = db.prepare('INSERT INTO quotes (text) VALUES (?)').run(text);
  response.status(201).json({ id: info.lastInsertRowid, text });
});
```
</v-click>

---
layout: center
---

# Schema Drift: The Hidden Danger

<v-click>
You rename a column: <code>text</code> → <code>content</code>
</v-click>
<v-click>
```js
// Before
db.prepare('INSERT INTO quotes (text) VALUES (?)').run(text);
// After schema change
db.prepare('INSERT INTO quotes (text) VALUES (?)').run(text); // Fails!
```
</v-click>

<v-click>

- Every query using <code>text</code> breaks
- No autocomplete, no refactor support
- Small DB change = hidden bugs everywhere
</v-click>

---
layout: center
---
# SQL Injection: A Real Threat

<v-click>
```js
const input = req.query.name;
const result = db.prepare(
  `SELECT * FROM users WHERE name = '${input}'`
).all();
```
</v-click>
<v-click>
Try input: <code>' OR 1=1 -- </code>
</v-click>

<v-click>

- Returns all users, exposes sensitive data
- Raw SQL is dangerous unless you sanitize every time
</v-click>

---
layout: center
---

# Copy-Paste Query Hell

<v-click>
<div class="grid grid-cols-1 gap-2 mb-2">
  <div class="p-3 bg-blue-100 rounded-lg border border-blue-600">
    <b>users-auth.js</b>
    <pre>db.prepare("SELECT * FROM users")</pre>
  </div>
  <div class="p-3 bg-green-100 rounded-lg border border-green-600">
    <b>users-bio.js</b>
    <pre>db.prepare("SELECT id, name FROM users WHERE id = ?")</pre>
  </div>
  <div class="p-3 bg-purple-100 rounded-lg border border-purple-600">
    <b>users-comments.js</b>
    <pre>db.prepare("SELECT * FROM users WHERE id = ?")</pre>
  </div>
</div>
</v-click>

<v-click>

- Which one is correct after a schema change?
- Where do you update logic?
- Raw SQL = duplication, inconsistency, pain
</v-click>

---
layout: center
---

# Missing Type Safety

<v-click>
```js
const user = db.prepare("SELECT id, name FROM users").get();
console.log(user.email.toLowerCase()); // Runtime error!
```
</v-click>

<v-click>

- <code>email</code> isn't selected, but you only find out at runtime
- With an ORM: error at compile time, not in production
</v-click>

---
layout: center
---

# Migration Chaos

<v-click>
```sql
ALTER TABLE users ADD COLUMN email TEXT;
```
</v-click>

<v-click>

- You forget to update all <code>INSERT INTO users</code> statements
- App crashes or inserts <code>NULL</code> for email
- No migration system = silent bugs
</v-click>

---
layout: center
---

# No Autocomplete = Slow Dev Velocity

<div class="grid grid-cols-2 gap-4">
  <div class="p-3 bg-pink-100 rounded-lg border border-pink-600">
    <b>Raw SQL</b>
    <ul>
      <li>No autocomplete</li>
      <li>No type hints</li>
      <li>Manual error checking</li>
    </ul>
  </div>
  <div class="p-3 bg-green-100 rounded-lg border border-green-600">
    <b>Prisma (ORM)</b>
    <ul>
      <li>Autocomplete for models/fields</li>
      <li>Type-safe queries</li>
      <li>Refactor with confidence</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Refactor Explosion

<v-click>
You rename <code>text</code> → <code>content</code>
</v-click>

<v-click>

- Without ORM: grep the codebase, hope you catch all
- With ORM: one error, all affected files flagged instantly
</v-click>

---
layout: center
---

# Thought Experiment

<v-click>
If 3 devs change 3 parts of the schema this week, how do you keep track?
</v-click>

<v-click>

How do you know if your query still works after those changes?
</v-click>

---
layout: center
---

# Takeaway

<v-click>

- Raw SQL is fine for tiny scripts
</v-click>

<v-click>

- For real apps: use an ORM (like Prisma) and migrations
</v-click>

<v-click>

- Save your sanity, ship faster, avoid silent bugs
</v-click>
