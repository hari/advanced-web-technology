const express = require('express');
const { PrismaClient } = require('./generated/prisma');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE'],
  },
});

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get('/quotes', async (request, response) => {
  const all = await prisma.quote.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  response.json(all);
});

let sseClients = [];
app.get('/quotes/stream', (request, response) => {
  response.setHeader('Content-Type', 'text/event-stream');
  response.setHeader('Cache-Control', 'no-cache');
  response.setHeader('Connection', 'keep-alive');
  response.flushHeaders();
  const clientId = Date.now();
  const newClient = { id: clientId, res: response };
  sseClients.push(newClient);
  console.log(`Client ${clientId} connected for SSE`);
  request.on('close', () => {
    console.log(`Client ${clientId} disconnected from SSE`);
    sseClients = sseClients.filter((client) => client.id !== clientId);
    response.end();
  });
});

app.post('/quotes', async (request, response) => {
  const quoteText = request.body?.text;
  if (!quoteText?.trim()) {
    response.status(400).send({ error: 'Text is required' });
    return;
  }
  try {
    const record = await prisma.quote.create({ data: { text: quoteText } });
    io.emit('newQuote', record); // Emit to all connected socket clients
    sseClients.forEach((client) =>
      client.res.write(`data: ${JSON.stringify(record)}\n\n`)
    );
    response.status(201).json(record);
  } catch (error) {
    console.error('Failed to create quote:', error);
    response.status(500).send({ error: 'Failed to save quote to database' });
  }
});

app.get('/quotes/:id', async (request, response) => {
  if (!request.params.id) {
    return response.status(400).send({ error: 'ID is required' });
  }
  const quote = await prisma.quote.findUnique({
    where: { id: parseInt(request.params.id) },
  });
  if (!quote) {
    response.status(404).send({ error: 'Quote not found' });
    return;
  }
  response.json(quote);
});

app.delete('/quotes/:id', async (request, response) => {
  const id = request.params.id;

  if (!id) {
    return response.status(400).send({ error: 'Invalid ID format' });
  }

  try {
    const quoteExists = await prisma.quote.findUnique({
      where: { id: parseInt(id) },
    });
    if (!quoteExists) {
      return response
        .status(404)
        .send({ error: 'Quote not found for deletion' });
    }
    await prisma.quote.delete({ where: { id: parseInt(id) } });
    // Emit to all connected socket clients
    io.emit('quoteDeleted', { id });
    sseClients.forEach((client) =>
      client.res.write(
        `event: quoteDeleted\ndata: ${JSON.stringify({ id })}\n\n`
      )
    );
    response.status(204).send();
  } catch (error) {
    if (error.code === 'P2025') {
      response.status(404).send({ error: 'Quote not found' });
    } else {
      console.error('Error deleting quote:', error);
      response.status(500).send({ error: 'Failed to delete quote' });
    }
  }
});

io.on('connection', (socket) => {
  console.log('A user connected via WebSocket:', socket.id);

  // Send all current quotes to a newly connected client
  prisma.quote
    .findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    .then((quotes) => {
      socket.emit('initialQuotes', quotes);
    })
    .catch((err) => console.error('Error sending initial quotes:', err));

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });

  socket.on('addQuoteRequest', async (data, callback) => {
    try {
      const record = await prisma.quote.create({ data: { text: data.text } });
      io.emit('newQuote', record); // Broadcast to all including sender
      callback({ error: null, record });
    } catch (error) {
      console.error('Error adding quote via socket:', error);
      callback({ error });
    }
  });

  socket.on('deleteQuoteRequest', async (data, callback) => {
    try {
      await prisma.quote.delete({ where: { id: parseInt(data.id) } });
      io.emit('quoteDeleted', { id: data.id }); // Broadcast to all including sender
      callback({ error: null });
    } catch (error) {
      console.error('Error deleting quote via socket:', error);
      callback({ error });
    }
  });
});

// Change server.listen to httpServer.listen
httpServer.listen(4444, () =>
  console.log('Server with Socket.IO is running on port 4444')
);
