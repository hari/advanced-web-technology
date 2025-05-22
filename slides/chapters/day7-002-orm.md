---
theme: seriph
layout: center
class: text-center
background: #f5f5f5
title: ORM & Databases - A Story
info: |
  From Chaos to Clarity: ORM, Databases & MVC through Real-World Dev Problems
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: false
colorSchema: 'light'
favicon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
---

# Why Do Projects Get Slower as They Grow?

<v-click>
<div class="max-w-md mx-auto text-gray-600 text-balance">
  Let's explore why teams slow down, bugs grow, and chaos reigns, and how the right database tools change everything.
</div>
</v-click>

---
layout: center
---

# The Core Problem


> "Why can't we just use Excel or copy-paste SQL everywhere?"

<v-click>

- Projects start small but quickly become messy
- One schema change = 10 broken queries
- You can't refactor what you don't understand
</v-click>

<v-click>

Real devs don't just *write* code. They design systems.
</v-click>

---
layout: center
---

# Level 1: Raw SQL — The Chaos Begins

<v-click>
```ts
const result = db.query(`SELECT * FROM messages WHERE id = ${id}`);
```
</v-click>

<v-click>

- SQL Injection: A single mistake can expose everything
- Hard to maintain: zero autocomplete, no types, no safety
- Every dev writes queries differently (and forgets to sanitize)
</v-click>

<div class="mt-4" v-click>

> Raw SQL is like writing assembly: powerful, but dangerous.
</div>

---
layout: center
---

# CRUD = Your App's Life Cycle

<v-click>
```sql
CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT NOT NULL
);
```
</v-click>

<v-click>

- **Create** → INSERT
- **Read** → SELECT
- **Update** → UPDATE
- **Delete** → DELETE
</v-click>

<v-click>

> Everything from Instagram posts to bank records is just CRUD.
</v-click>

---
layout: center
---

# Dev Log: Schema Just Changed. Panic?

<v-click>
You added a new column. 4 other devs are working in parallel.
</v-click>

<v-click>

Now: merge conflicts, outdated queries, hidden bugs.

> What's your strategy to survive this?
</v-click>

---
layout: center
---

# Level 2: Meet ORM

<v-click>
```ts
const quote = await prisma.quotes.create({
  data: { text: 'Hello ORM' }
});
```
</v-click>

<v-click>

- Writes SQL for you (safely)
- Auto-validates and auto-suggests
- Prevents SQL injection
</v-click>

<v-click>

> ORM is a translator between objects & tables.
</v-click>

---
layout: center
---

# Prisma Quick Start

<v-click>
1. Install dependencies:
```bash
npm i prisma @prisma/client
```
</v-click>

<v-click>
2. Initialize Prisma:
```bash
npx prisma init
```
</v-click>

<v-click>
3. Create schema
```prisma
model ModelName {
  fieldName type
}
```
</v-click>

<v-click>
4. Create and apply migration
```bash
npx prisma migrate dev
```
</v-click>

<v-click>
1. Use in the code
</v-click>

---
layout: center
---

# ORM vs SQL: A Tactical Comparison

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-red-100 rounded-lg border border-red-600">
    <strong>Raw SQL</strong>
    <ul class="space-y-1 list-disc pl-4">
      <li>Manual strings</li>
      <li>Error-prone</li>
      <li>No autocomplete</li>
    </ul>
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <strong>Prisma ORM</strong>
    <ul class="space-y-1 list-disc pl-4">
      <li>Type-safe queries</li>
      <li>Refactor-safe</li>
      <li>Cleaner syntax</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Migrations = Time Travel for Your DB

<v-click>
```bash
npx prisma migrate dev --name add-users-table
```
</v-click>

<v-click>

- Each change = tracked forever
- You can rollback, review, and collaborate
- Migrations are like Git commits for your database.
</v-click>

---
layout: center
---

# Recap: From Chaos to Clean Code

<div v-click class="bg-red-100 rounded-lg border border-red-600 p-4">
We saw the pain of raw SQL
</div>

<div v-click class="bg-green-100 my-4 rounded-lg border border-green-600 p-4">
We learned ORM + Prisma
</div>

<div v-click class="bg-blue-100 rounded-lg border border-blue-600 p-4">
We created migrations and models
</div>

---
layout: center
---

# Quiz Time

<div class="grid grid-cols-2 gap-4">
  <Poll question="What does ORM stand for?" :answers="['Object-Relational Mapping', 'Online Relational Model', 'Object-Ready Migration', 'Orderly Relational Method']" :correctAnswer="0" />
  <Poll question="What does migration track?" :answers="['Schema changes', 'User data', 'API endpoints', 'Frontend code']" :correctAnswer="0" />
</div>

---
layout: center
---

# Quiz Time

<div class="grid grid-cols-2 gap-4">
  <Poll question="Which layer should talk to the database?" :answers="['Data Access Layer', 'UI Layer', 'Business Logic Layer', 'View']" :correctAnswer="0" />
  <Poll question="Prisma is ____" :answers="['ORM', 'SQL', 'NoSQL', 'Database']" :correctAnswer="0" />
</div>
