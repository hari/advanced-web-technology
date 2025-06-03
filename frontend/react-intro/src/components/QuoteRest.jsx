import { useState, useEffect, useCallback } from 'react';

const API_URL = 'http://localhost:4444/quotes';
const POLLING_INTERVAL = 2000; // 2 seconds

export default function QuoteRest() {
  const [quotes, setQuotes] = useState([]);
  const [newQuote, setNewQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usePolling, setUsePolling] = useState(false);

  const fetchQuotes = useCallback(async () => {
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
      console.error('Failed to fetch quotes:', e);
      setError('Failed to load quotes. Is the backend server running?');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes();

    if (usePolling) {
      const intervalId = setInterval(fetchQuotes, POLLING_INTERVAL);
      return () => clearInterval(intervalId);
    }
  }, [usePolling, fetchQuotes]); // Re-run effect when polling preference changes

  function handleInputChange(event) {
    setNewQuote(event.target.value);
  }

  async function addQuote() {
    if (newQuote.trim() === '') return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newQuote }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }
      const addedQuote = await response.json();
      setQuotes([...quotes, addedQuote]);
      setNewQuote('');
    } catch (e) {
      console.error('Failed to add quote:', e);
      setError(`Failed to add quote: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  async function removeQuote(id) {
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok && response.status !== 204) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setQuotes(quotes.filter((quote) => quote.id !== id));
    } catch (e) {
      console.error('Failed to remove quote:', e);
      setError('Failed to remove quote.');
    }
  }

  return (
    <div className="example-container">
      <h2>Example 3: Quote with REST API</h2>
      <form
        className="quote-input"
        onSubmit={(e) => {
          e.preventDefault();
          addQuote();
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
          {isLoading && quotes.length === 0
            ? 'Loading Initial Quotes...'
            : isLoading
              ? 'Adding...'
              : 'Add Quote'}
        </button>
      </form>

      <div className="polling-control">
        <label>
          <input
            type="checkbox"
            checked={usePolling}
            onChange={(e) => setUsePolling(e.target.checked)}
          />
          Use HTTP polling
        </label>
      </div>

      {error && <p className="error-message">Error: {error}</p>}

      {isLoading && quotes.length === 0 && <p>Loading quotes...</p>}

      {!isLoading && !error && quotes.length === 0 && (
        <p>No quotes yet. Add one or check if the backend is connected!</p>
      )}

      <ul className="quote-list">
        {quotes.map((quote) => (
          <li key={quote.id} className="quote-item">
            {quote.text} (ID: {quote.id})
            <button
              onClick={() => removeQuote(quote.id)}
              disabled={isLoading}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="student-notes">
        <h3>Notes for Students:</h3>
        <p>
          This example demonstrates fetching data from a backend API and sending
          data to it. We're using the browser's built-in <code>fetch</code> API.
        </p>
        <p>
          <strong>Key Concepts Introduced:</strong>
        </p>
        <ul>
          <li>
            <strong>
              <code>useEffect</code> Hook:
            </strong>{' '}
            Used to perform "side effects" in function components. Data
            fetching, subscriptions, or manually changing the DOM are common
            side effects. The <code>useEffect(() =&gt; {}, []);</code> with an
            empty dependency array <code>[]</code> means the effect runs once
            after the initial render, which is perfect for fetching initial
            data.
          </li>
          <li>
            <strong>
              <code>fetch</code> API:
            </strong>{' '}
            A modern JavaScript interface for making network requests (HTTP
            requests). It returns a Promise.
            <ul>
              <li>
                <code>GET /quotes</code>: Fetches all quotes when the component
                mounts.
              </li>
              <li>
                <code>POST /quotes</code>: Adds a new quote. Notice the{' '}
                <code>method</code>, <code>headers</code>, and <code>body</code>{' '}
                options in the <code>fetch</code> call.
              </li>
              <li>
                <code>DELETE /quotes/:id</code>: Removes a quote.
              </li>
            </ul>
          </li>
          <li>
            <strong>Loading State: </strong>
            The <code>isLoading</code> state variable is used to provide
            feedback to the user while data is being fetched or submitted (e.g.,
            disabling buttons, showing a "Loading..." message).
          </li>
          <li>
            <strong>Error Handling: </strong>
            The <code>error</code> state variable stores any error messages that
            occur during API calls. Basic error handling is done using{' '}
            <code>try...catch</code> blocks. We check <code>response.ok</code>{' '}
            to see if the HTTP request was successful (status in the range
            200-299).
          </li>
          <li>
            <strong>API URL: </strong>
            The <code>API_URL</code> constant (
            <code>http://localhost:4444/quotes</code>) points to the backend
            server you should have running from the{' '}
            <code>backend/express-intro</code> directory (
            <code>node with-orm.js</code>).
          </li>
          <li>
            <strong>Asynchronous Operations: </strong>
            Functions that interact with the API (<code>fetchQuotes</code>,{' '}
            <code>addQuote</code>, <code>removeQuote</code>) are{' '}
            <code>async</code> functions, and we use <code>await</code> to
            handle the Promises returned by <code>fetch</code>.
          </li>
          <li>
            <strong>IDs from Backend: </strong> Notice that each quote now has
            an <code>id</code> provided by the backend. This is crucial for
            uniquely identifying and managing items, especially when deleting or
            updating specific ones.
          </li>
        </ul>
        <p>
          <strong>Running this Example: </strong>
        </p>
        <p>
          Make sure your backend server (<code>with-orm.js</code>) is running on
          port 4444. If it's not, you'll see an error message.
        </p>
        <p>
          <strong>Comparison with Example 2: </strong>
        </p>
        <p>
          While Example 2 managed state internally, this example makes the
          application more realistic by persisting data on a server. The core
          React concepts (<code>useState</code>) are still the same, but we've
          added data fetching logic with <code>useEffect</code> and{' '}
          <code>fetch</code>. The complexity increases with the need to handle
          network latency, loading states, and potential errors.
        </p>
      </div>
    </div>
  );
}
