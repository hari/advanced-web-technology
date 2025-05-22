const express = require('express');

// Create an Express server
const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

let quotes = [
  { id: 1, text: 'The only way to do great work is to love what you do.' },
  { id: 2, text: 'The best way to predict the future is to invent it.' },
];

// Get all quotes
server.get('/quotes', (request, response) => {
  response.json(quotes);
});

server.post('/quotes', (req, res) => {
  const quote = req.body?.text;
  if (!quote?.trim()) {
    res.status(400).send({ error: 'Text is required' });
    return;
  }

  const newQuote = { id: quotes.length + 1, text: quote };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

server.get('/quotes/:id', (req, res) => {
  const quote = quotes.find((quote) => quote.id === parseInt(req.params.id));
  if (!quote) {
    res.status(404).send({ error: 'Quote not found' });
    return;
  }

  res.json(quote);
});

server.delete('/quotes/:id', (req, res) => {
  const quote = quotes.find((quote) => quote.id === parseInt(req.params.id));
  if (!quote) {
    res.status(404).send({ error: 'Quote not found' });
    return;
  }
  quotes = quotes.filter((quote) => quote.id !== parseInt(req.params.id));
  res.status(204).send();
});

server.listen(3000, () => console.log('Server is running on port 3000'));
