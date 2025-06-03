import { useState } from 'react';
import { useQuotesApi } from '../hooks/useQuotesApi';
import Notes from './Notes';

export default function QuoteCustomHook() {
  const { quotes, isLoading, error, addQuote, removeQuote, fetchQuotes } =
    useQuotesApi();
  const [newQuoteText, setNewQuoteText] = useState('');
  const [addError, setAddError] = useState(null); // Specific error for adding quote

  function handleInputChange(event) {
    setNewQuoteText(event.target.value);
    setAddError(null); // Clear add error on input change
  }

  async function handleAddQuote() {
    if (newQuoteText.trim() === '') {
      setAddError('Quote text cannot be empty.');
      return;
    }
    setAddError(null);
    const added = await addQuote(newQuoteText);
    if (added) {
      setNewQuoteText('');
    }
  }

  async function handleRemoveQuote(id) {
    // Optional: add specific loading/error state for remove operation if needed
    await removeQuote(id);
    // The hook manages the quotes list and general error state
  }

  return (
    <div className="example-container">
      <h2>Example 4: Quote with Custom Hook</h2>
      <form
        className="quote-input"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddQuote();
        }}
      >
        <input
          type="text"
          value={newQuoteText}
          onChange={handleInputChange}
          placeholder="Enter a new quote"
          disabled={isLoading && quotes.length === 0} // Disable if initial load is happening
        />
        <button type="submit" disabled={isLoading}>
          {isLoading && !error ? 'Processing...' : 'Add Quote'}
        </button>
        <button onClick={fetchQuotes} disabled={isLoading}>
          {isLoading ? 'Refreshing...' : 'Refresh Quotes'}
        </button>
      </form>

      {addError && <p className="error-message">{addError}</p>}
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
              onClick={() => handleRemoveQuote(quote.id)}
              disabled={isLoading}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <Notes title="About This Example (Custom Hook)">
        <p>
          In this example, we've taken the data fetching logic, loading state
          management, and error handling from Example 3 and encapsulated it into
          a custom hook called <code>useQuotesApi</code>. The component (
          <code>QuoteCustomHook.jsx</code>) now becomes much cleaner and focused
          on presentation.
        </p>
        <p>
          <strong>What is a Custom Hook?</strong>
        </p>
        <ul>
          <li>
            A custom hook is a JavaScript function whose name starts with "use"
            and that can call other hooks (like <code>useState</code>,{' '}
            <code>useEffect</code>, or even other custom hooks).
          </li>
          <li>
            They are a way to reuse stateful logic between different components
            without changing your component hierarchy.
          </li>
          <li>
            Our <code>useQuotesApi</code> hook (in{' '}
            <code>src/hooks/useQuotesApi.js</code>) now manages:
            <ul>
              <li>
                The <code>quotes</code> array.
              </li>
              <li>
                <code>isLoading</code> and <code>error</code> states related to
                API calls.
              </li>
              <li>
                Functions to <code>fetchQuotes</code>, <code>addQuote</code>,
                and <code>removeQuote</code>.
              </li>
            </ul>
            It returns these states and functions for the component to use.
          </li>
        </ul>
        <p>
          <strong>Benefits of Using Custom Hooks:</strong>
        </p>
        <ul>
          <li>
            <strong>Reusability:</strong> If another component needed to
            interact with the quotes API, it could also use{' '}
            <code>useQuotesApi</code> without duplicating logic.
          </li>
          <li>
            <strong>Separation of Concerns:</strong> The component focuses on
            rendering the UI, while the hook handles the complexities of API
            interaction. This makes both parts easier to understand, test, and
            maintain.
          </li>
          <li>
            <strong>Readability:</strong> The component code is significantly
            shorter and cleaner. Compare <code>QuoteCustomHook.jsx</code> with{' '}
            <code>QuoteRest.jsx</code> (Example 3).
          </li>
        </ul>
        <p>
          <strong>How it Works Here:</strong>
        </p>
        <p>
          <code>
            const{' '}
            {`{ quotes, isLoading, error, addQuote, removeQuote, fetchQuotes }`}{' '}
            = useQuotesApi();
          </code>
          <br />
          This line calls our custom hook. The hook initializes its own state,
          fetches the data, and provides the component with the necessary data
          and functions.
        </p>
        <p>
          The <code>addQuote</code> and <code>removeQuote</code> functions
          returned by the hook are already bound and manage their own
          loading/error states internally to some extent, updating the shared{' '}
          <code>quotes</code> list. The component can still have its own
          UI-specific state (like <code>newQuoteText</code> for the input field
          and <code>addError</code> for specific add validation).
        </p>
        <p>
          The <code>fetchQuotes</code> function is also exposed by the hook,
          allowing the component to trigger a manual refresh of the quotes list.
        </p>
        <p>
          Custom hooks are a powerful pattern in React for organizing and
          sharing logic. As applications grow, they become invaluable for
          keeping code DRY (Don't Repeat Yourself) and maintainable.
        </p>
      </Notes>
    </div>
  );
}
