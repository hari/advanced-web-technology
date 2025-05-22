const express = require('express');
// Create a database connection
const db = require('better-sqlite3')('data.db');

// Create a table if it doesn't exist
db.prepare(
  `CREATE TABLE IF NOT EXISTS quotes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT NOT NULL
)`
).run();

// Create an Express server
const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

// Get all quotes
server.get('/quotes', (request, response) => {
  const all = db.prepare('SELECT * FROM quotes').all();
  response.json(all);
});

server.post('/quotes', (req, res) => {
  const quote = req.body?.text;
  if (!quote?.trim()) {
    res.status(400).send({ error: 'Text is required' });
    return;
  }

  const info = db.prepare('INSERT INTO quotes (text) VALUES (?)').run(quote);
  res.status(201).json({ id: info.lastInsertRowid, text: quote });
});

server.get('/quotes/:id', (req, res) => {
  const quote = db
    .prepare('SELECT * FROM quotes WHERE id = ?')
    .get(req.params.id);
  if (!quote) {
    res.status(404).send({ error: 'Quote not found' });
    return;
  }

  res.json(quote);
});

server.delete('/quotes/:id', (req, res) => {
  const result = db
    .prepare('DELETE FROM quotes WHERE id = ?')
    .run(req.params.id);
  if (result.changes === 0) {
    res.status(404).send({ error: 'Quote not found' });
    return;
  }
  res.status(204).send();
});

server.listen(4000, () => console.log('Server is running on port 4000'));
