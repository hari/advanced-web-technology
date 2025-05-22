# Express.js Database Layer Examples

This project demonstrates three different approaches to handling data persistence in an Express.js application:

1. In-memory Array Storage
2. SQLite with better-sqlite3
3. Prisma ORM with SQLite

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Set up the database:
```bash
pnpm prisma migrate dev
```

## Running the Application

1. Start the server with Prisma:
```bash
node with-orm.js
```

2. Start the server with better-sqlite3:
```bash
node with-sqlite.js
```

3. Start the server with in-memory array storage:
```bash
node with-array.js
```

All of them implement the same API:

```bash
GET /api/quotes
POST /api/quotes
GET /api/quotes/:id
DELETE /api/quotes/:id
```
