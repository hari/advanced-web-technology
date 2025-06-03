import { useState, useEffect, useCallback } from 'react';
import Notes from './Notes';

const API_URL = 'http://localhost:4444/quotes';

export default function QuoteStream() {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false); // For initial load and add/delete actions
  const [error, setError] = useState(null);
  const [streamStatus, setStreamStatus] = useState('Connecting to stream...');

  // Fetch initial quotes
  const fetchInitialQuotes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setQuotes(data);
    } catch (e) {
      console.error('Failed to fetch initial quotes:', e);
      setError('Failed to load initial quotes. Is the backend server running?');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInitialQuotes();
  }, [fetchInitialQuotes]);

  useEffect(() => {
    const eventSource = new EventSource(`${API_URL}/stream`);
    setStreamStatus('Connection open to stream.');

    eventSource.onopen = () => {
      setStreamStatus('Stream connection established.');
      console.log('SSE connection opened.');
    };

    // Default message handler for new quotes
    eventSource.onmessage = (event) => {
      try {
        const newQuoteData = JSON.parse(event.data);
        console.log('SSE new quote received:', newQuoteData);
        // Add if not already present (e.g. if it came from this client's POST)
        setQuotes((prevQuotes) =>
          prevQuotes.find((q) => String(q.id) === String(newQuoteData.id))
            ? prevQuotes
            : [newQuoteData, ...prevQuotes]
        );
      } catch (e) {
        console.error('Error parsing SSE data for new quote:', e, event.data);
      }
    };

    // Custom event for deleted quotes
    eventSource.addEventListener('quoteDeleted', (event) => {
      try {
        const deletedQuoteData = JSON.parse(event.data);
        console.log('SSE quote deleted event received:', deletedQuoteData);
        setQuotes((prevQuotes) =>
          prevQuotes.filter((q) => String(q.id) !== String(deletedQuoteData.id))
        );
      } catch (e) {
        console.error(
          'Error parsing SSE data for quoteDeleted:',
          e,
          event.data
        );
      }
    });

    eventSource.onerror = (err) => {
      console.error('EventSource failed:', err, err.type);
      setStreamStatus('Stream connection error. Will attempt to reconnect.');
      // EventSource attempts to reconnect automatically.
      // You might want to close it definitively under certain conditions.
      // eventSource.close();
    };

    // Cleanup on component unmount
    return () => {
      console.log('Closing SSE connection.');
      eventSource.close();
      setStreamStatus('Stream connection closed.');
    };
  }, []);

  function handleInputChange(event) {
    setNewQuote(event.target.value);
  }

  async function handleAddQuote() {
    if (newQuote.trim() === '') return;
    setIsLoading(true); // Indicate loading for the POST request
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newQuote }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }
      // const addedQuote = await response.json();
      // No need to manually add to state here, SSE should send the update.
      // If SSE is slightly delayed, this could cause a temporary duplicate if not handled by SSE onmessage.
      setNewQuote('');
    } catch (e) {
      console.error('Failed to add quote:', e);
      setError(`Failed to add quote: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRemoveQuote(id) {
    setIsLoading(true); // Indicate loading for the DELETE request
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok && response.status !== 204) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // No need to manually remove from state here, SSE should send the 'quoteDeleted' event.
    } catch (e) {
      console.error('Failed to remove quote:', e);
      setError('Failed to remove quote.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="example-container">
      <h2>Example 6: Quote with HTTP Streaming (SSE)</h2>
      <p>Stream Status: {streamStatus}</p>
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

      <Notes title="About This Example (HTTP Streaming/SSE)">
        <p>
          This example demonstrates real-time updates using HTTP Streaming,
          specifically Server-Sent Events (SSE). The backend has a{' '}
          <code>/quotes/stream</code> endpoint.
        </p>
        <p>
          <strong>Key Concepts:</strong>
        </p>
        <ul>
          <li>
            <strong>Server-Sent Events (SSE):</strong> A standard where a server
            can send data to a client unidirectionally (server to client) over a
            single, long-lived HTTP connection. It's simpler than WebSockets for
            server-to-client broadcasting.
          </li>
          <li>
            <strong>
              <code>EventSource</code> API:
            </strong>{' '}
            The browser's built-in interface for establishing an SSE connection.
            We create an instance with{' '}
            <code>new EventSource('/quotes/stream')</code>.
          </li>
          <li>
            <strong>Event Handling:</strong>
            <ul>
              <li>
                <code>eventSource.onmessage</code>: Handles default messages
                sent from the server (those without a specific{' '}
                <code>event:</code> name). Our backend sends newly created
                quotes as default messages.
              </li>
              <li>
                <code>eventSource.addEventListener('eventName', callback)</code>
                : Handles messages sent with a specific event name. Our backend
                sends <code>event: quoteDeleted</code> when a quote is removed.
              </li>
              <li>
                <code>eventSource.onopen</code>: Called when the connection is
                successfully established.
              </li>
              <li>
                <code>eventSource.onerror</code>: Called when an error occurs.
                EventSource handles reconnection automatically by default.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Backend Implementation (<code>with-orm.js</code>):
            </strong>
            <ul>
              <li>
                The <code>/quotes/stream</code> endpoint sets headers (
                <code>Content-Type: text/event-stream</code>,{' '}
                <code>Cache-Control: no-cache</code>,{' '}
                <code>Connection: keep-alive</code>).
              </li>
              <li>
                It keeps a list of connected clients (<code>sseClients</code>
                ).
              </li>
              <li>
                When a new quote is POSTed to <code>/quotes</code>, the backend
                iterates through <code>sseClients</code> and writes the new
                quote data in the format <code>data: {`{...}`}\n\n</code>.
              </li>
              <li>
                When a quote is DELETEd from <code>/quotes/:id</code>, it sends
                a custom event:{' '}
                <code>event: quoteDeleted\ndata: {`{...}`}\n\n</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>Client-Side State Updates:</strong> The component listens to
            these events and updates its local <code>quotes</code> state
            accordingly, causing the UI to re-render with the new data in
            real-time.
          </li>
          <li>
            <strong>Initial Data Load:</strong> SSE is for ongoing updates. We
            still perform an initial fetch of all existing quotes using a
            regular HTTP request (<code>fetchInitialQuotes</code>) when the
            component mounts.
          </li>
          <li>
            <strong>Adding/Deleting Quotes:</strong> These actions still use
            standard POST/DELETE requests to <code>/quotes</code> or{' '}
            <code>/quotes/:id</code>. The real-time update to the list is then
            handled by the SSE stream which receives notifications from the
            backend about these changes.
          </li>
          <li>
            <strong>Cleanup:</strong> It's crucial to close the{' '}
            <code>EventSource</code> connection (
            <code>eventSource.close()</code>) when the component unmounts to
            prevent memory leaks and unnecessary open connections. This is done
            in the cleanup function of <code>useEffect</code>.
          </li>
        </ul>
        <p>
          <strong>How it Works:</strong>
        </p>
        <p>
          Open this example in two browser windows. Add or remove a quote in one
          window, and you should see the changes reflected in the other window
          almost instantly, thanks to the SSE stream.
        </p>
        <p>
          SSE is a great choice when you need one-way communication from server
          to client, like for notifications, live feeds, or data
          synchronization. For two-way (duplex) communication, WebSockets (shown
          in the next example) are typically used.
        </p>
      </Notes>
    </div>
  );
}
