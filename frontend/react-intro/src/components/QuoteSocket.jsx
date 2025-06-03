import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Notes from './Notes';

const SOCKET_URL = 'http://localhost:4444'; // For Socket.IO connection

let socket;

export default function QuoteSocket() {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [socketStatus, setSocketStatus] = useState(
    'Connecting to WebSocket...'
  );

  useEffect(() => {
    if (!socket || socket.disconnected) {
      socket = io(SOCKET_URL);
    }

    setSocketStatus('Socket connection initiated.');

    socket.on('connect', () => {
      setSocketStatus(`Connected with socket ID: ${socket.id}`);
      console.log('Socket connected:', socket.id);
    });

    socket.on('disconnect', (reason) => {
      setSocketStatus(`Socket disconnected: ${reason}`);
      console.log('Socket disconnected:', reason);
    });

    socket.on('connect_error', (err) => {
      setSocketStatus(`Socket connection error: ${err.message}`);
      console.error('Socket connection error:', err);
    });

    socket.on('error', (error) => {
      setError(`Socket error: ${error.message}`);
      console.error('Socket error:', error);
    });

    socket.on('newQuote', (newQuoteData) => {
      console.log("Socket 'newQuote' received:", newQuoteData);
      setQuotes((prevQuotes) =>
        prevQuotes.find((q) => String(q.id) === String(newQuoteData.id))
          ? prevQuotes
          : [newQuoteData, ...prevQuotes]
      );
    });

    socket.on('quoteDeleted', (deletedQuoteData) => {
      console.log("Socket 'quoteDeleted' received:", deletedQuoteData);
      setQuotes((prevQuotes) =>
        prevQuotes.filter((q) => String(q.id) !== String(deletedQuoteData.id))
      );
    });

    socket.on('initialQuotes', (initialQuotesData) => {
      console.log("Socket 'initialQuotes' received:", initialQuotesData);
      setQuotes(initialQuotesData);
      setIsLoading(false);
    });

    return () => {
      console.log('Cleaning up socket listeners for QuoteSocket component');
      socket.off('connect');
      socket.off('disconnect');
      socket.off('connect_error');
      socket.off('newQuote');
      socket.off('quoteDeleted');
      socket.off('initialQuotes');

      if (socket?.connected) {
        console.log('Disconnecting socket explicitly');
        socket.disconnect();
      }
    };
  }, []);

  function handleInputChange(event) {
    setNewQuote(event.target.value);
  }

  function handleAddQuote() {
    if (newQuote.trim() === '') return;
    setIsLoading(true);
    setError(null);
    socket.emit('addQuoteRequest', { text: newQuote }, (response) => {
      console.log('addQuoteRequest response:', response);
      if (response.error) {
        setError(`Failed to add quote: ${response.error.message}`);
      }
      setNewQuote('');
      setIsLoading(false);
    });
  }

  function handleRemoveQuote(id) {
    setIsLoading(true);
    setError(null);

    socket.emit('deleteQuoteRequest', { id }, (response) => {
      console.log('deleteQuoteRequest response:', response);
      if (response.error) {
        setError(`Failed to delete quote: ${response.error.message}`);
      }
      setIsLoading(false);
    });
  }

  return (
    <div className="example-container">
      <h2>Example 7: Quote with WebSockets (Socket.IO)</h2>
      <p>Socket Status: {socketStatus}</p>
      <form
        className="quote-input"
        onSubmit={(event) => {
          event.preventDefault();
          handleAddQuote();
        }}
      >
        <input
          type="text"
          value={newQuote}
          onChange={handleInputChange}
          placeholder="Enter a new quote"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Add Quote'}
        </button>
      </form>

      {error && <p className="error-message">Error: {error}</p>}
      {isLoading && quotes.length === 0 && <p>Loading initial quotes...</p>}

      <ul className="quote-list">
        {quotes.map((quote) => (
          <li key={quote.id} className="quote-item">
            {quote.text} (ID: {quote.id})
            <button
              onClick={() => handleRemoveQuote(quote.id)}
              disabled={isLoading}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {quotes.length === 0 && !isLoading && <p>No quotes yet. Add one!</p>}

      <Notes title="About This Example (WebSockets)">
        <p>
          This example demonstrates real-time, bi-directional communication
          using WebSockets via the Socket.IO library.
        </p>
        <p>
          <strong>Key Concepts:</strong>
        </p>
        <ul>
          <li>
            <strong>WebSockets:</strong> A communication protocol that provides
            full-duplex (two-way) communication channels over a single TCP
            connection. Unlike SSE (one-way server-to-client), WebSockets allow
            both client and server to send messages to each other independently.
          </li>
          <li>
            <strong>Socket.IO:</strong> A library that enables real-time,
            bi-directional and event-based communication. It primarily uses
            WebSockets but can fall back to other methods like HTTP long polling
            if WebSockets aren't available. It provides helpful features like
            rooms, namespaces, and automatic reconnection.
          </li>
          <li>
            <strong>
              Backend Setup (<code>with-orm.js</code>):
            </strong>
            <ul>
              <li>
                The Express HTTP server is wrapped with{' '}
                <code>http.createServer()</code>.
              </li>
              <li>
                A Socket.IO server is initialized and attached to the HTTP
                server:{' '}
                <code>{`new Server(httpServer, { cors: { origin: "http://localhost:3000" } })`}</code>
                .
              </li>
              <li>
                <code>{`io.on('connection', (socket) => { ... })`}</code>:
                Listens for new client connections. Each connected client gets a
                unique <code>socket</code> object.
              </li>
              <li>
                <code>io.emit('eventName', data)</code>: Sends an event to ALL
                connected clients (e.g., when a new quote is added via socket).
              </li>
              <li>
                We use <code>'newQuote'</code>, <code>'quoteDeleted'</code>, and{' '}
                <code>'initialQuotes'</code> as custom event names.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Frontend Setup (<code>QuoteSocket.jsx</code>):
            </strong>
            <ul>
              <li>
                <code>import io from 'socket.io-client';</code>: Imports the
                client library.
              </li>
              <li>
                <code>socket = io(SOCKET_URL);</code>: Establishes a connection
                to the Socket.IO server.
              </li>
              <li>
                <code>{`socket.on('eventName', (data) => { ... })`}</code>:
                Listens for events from the server (e.g.,{' '}
                <code>'newQuote'</code>, <code>'quoteDeleted'</code>,{' '}
                <code>'initialQuotes'</code>).
              </li>
              <li>
                <code>socket.on('connect', ...)</code>,{' '}
                <code>socket.on('disconnect', ...)</code>,{' '}
                <code>socket.on('connect_error', ...)</code>,{' '}
                <code>socket.on('error', ...)</code>: Standard Socket.IO events
                for connection lifecycle and error handling.
              </li>
            </ul>
          </li>
          <li>
            <strong>Data Flow:</strong>
            <ol>
              <li>Component mounts, establishes WebSocket connection.</li>
              <li>
                Server sends initial quotes via <code>'initialQuotes'</code>{' '}
                event.
              </li>
              <li>
                User adds a quote: Input &rarr; Socket emit{' '}
                <code>'addQuoteRequest'</code> with callback for response.
              </li>
              <li>
                Server saves quote to DB, then{' '}
                <code>io.emit('newQuote', newQuoteData)</code>.
              </li>
              <li>
                ALL connected clients receive the <code>'newQuote'</code> event
                and update their state/UI. Same logic for delete with and update
                their state/UI. Same logic for delete.
              </li>
            </ol>
            All communication is now done via sockets, including mutations
            (add/delete).
          </li>
          <li>
            <strong>Cleanup:</strong> In <code>useEffect</code>'s cleanup
            function, we call <code>socket.off('eventName')</code> for each
            listener to prevent memory leaks and duplicate event handling if the
            component re-renders or if the socket instance were shared. Deciding
            whether to call <code>socket.disconnect()</code> depends on whether
            other parts of the app might still need the connection.
          </li>
        </ul>
        <p>
          <strong>Comparison with SSE (Example 6):</strong>
        </p>
        <ul>
          <li>
            SSE is simpler for server-to-client updates. WebSockets are more
            powerful for bi-directional needs.
          </li>
          <li>
            Socket.IO adds a layer of abstraction and features over raw
            WebSockets, making them easier to work with (e.g., fallbacks,
            auto-reconnection).
          </li>
        </ul>
        <p>
          Open this example in multiple browser windows. Adding or removing a
          quote in one should reflect in all others nearly instantly.
        </p>
      </Notes>
    </div>
  );
}
