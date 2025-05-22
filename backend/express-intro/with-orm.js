const express = require('express');
const { PrismaClient } = require('./generated/prisma');

const server = express();
server.use(express.json());

const prisma = new PrismaClient();

server.get('/quotes', async (request, response) => {
  // What would happen if we didn't await?
  const all = await prisma.quote.findMany();

  // What would happen if there are many quotes e.g. 1000?
  response.json(all);
});

server.post('/quotes', async (request, response) => {
  /**
   * What other status codes can we add here?
   * - Think of 401, 403, 429, etc
   */
  const quote = request.body?.text;
  if (!quote?.trim()) {
    response.status(400).send({ error: 'Text is required' });
    return;
  }

  const record = await prisma.quote.create({ data: { text: quote } });
  response.status(201).json({ id: record.id, text: quote });
});

server.get('/quotes/:id', async (request, response) => {
  const quote = await prisma.quote.findUnique({
    where: { id: parseInt(request.params.id) },
  });

  if (!quote) {
    response.status(404).send({ error: 'Quote not found' });
    return;
  }

  response.json(quote);
});

server.delete('/quotes/:id', async (request, response) => {
  // What happens if we don't parse the id?
  const id = parseInt(request.params.id);
  try {
    await prisma.quote.delete({
      where: { id },
    });
  } catch (error) {
    // What happens if the quote is not found?
    response.status(404).send({ error: 'Quote not found' });
    return;
  }

  response.status(204).send();
});

server.listen(6000, () => console.log('Server is running on port 6000'));
