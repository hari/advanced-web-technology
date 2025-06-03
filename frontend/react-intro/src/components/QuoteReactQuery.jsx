import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Notes from './Notes';

const API_URL = 'http://localhost:4444/quotes';

async function fetchQuotes() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

async function addQuoteRequest(newQuoteText) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: newQuoteText }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.error || `HTTP error! status: ${response.status}`
    );
  }
  return response.json();
}

async function removeQuoteRequest(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok && response.status !== 204) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return id;
}

export default function QuoteReactQuery() {
  const queryClient = useQueryClient();
  const [newQuoteText, setNewQuoteText] = useState('');
  const [withOptimisticUpdates, setWithOptimisticUpdates] = useState(false);

  const {
    data: quotes = [],
    isLoading: isLoadingQuotes,
    isError: isErrorQuotes,
    error: errorQuotes,
  } = useQuery({
    queryKey: ['quotes'],
    queryFn: fetchQuotes,
  });

  const addMutation = useMutation({
    mutationFn: addQuoteRequest,
    onMutate: async (newQuoteText) => {
      if (!withOptimisticUpdates) {
        return;
      }

      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['quotes'] });

      // Snapshot the previous value
      const previousQuotes = queryClient.getQueryData(['quotes']);

      // Optimistically update to the new value
      const optimisticQuote = {
        id: `temp-${Date.now()}`,
        text: newQuoteText,
      };

      queryClient.setQueryData(['quotes'], (old) => [
        optimisticQuote,
        ...(old || []),
      ]);

      // Return a context object with the snapshotted value
      return { previousQuotes };
    },
    onError: (err, newQuoteText, context) => {
      if (withOptimisticUpdates && context?.previousQuotes) {
        // If the mutation fails, use the context returned from onMutate to roll back
        queryClient.setQueryData(['quotes'], context.previousQuotes);
      }
      console.error('Error adding quote:', err);
    },
    onSettled: () => {
      // Always refetch after error or success to ensure data consistency
      queryClient.invalidateQueries({ queryKey: ['quotes'] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: removeQuoteRequest,
    onMutate: async (id) => {
      if (!withOptimisticUpdates) {
        return;
      }

      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['quotes'] });

      // Snapshot the previous value
      const previousQuotes = queryClient.getQueryData(['quotes']);

      // Optimistically update to the new value
      queryClient.setQueryData(['quotes'], (old) =>
        old ? old.filter((quote) => quote.id !== id) : []
      );

      // Return a context object with the snapshotted value
      return { previousQuotes };
    },
    onError: (err, id, context) => {
      if (withOptimisticUpdates && context?.previousQuotes) {
        // If the mutation fails, use the context returned from onMutate to roll back
        queryClient.setQueryData(['quotes'], context.previousQuotes);
      }
      console.error('Error removing quote:', err);
    },
    onSettled: () => {
      // Always refetch after error or success to ensure data consistency
      queryClient.invalidateQueries({ queryKey: ['quotes'] });
    },
  });

  function handleInputChange(event) {
    setNewQuoteText(event.target.value);
    if (addMutation.isError) {
      addMutation.reset();
    }
  }

  function handleAddQuote() {
    if (newQuoteText.trim() === '') {
      return;
    }
    addMutation.mutate(newQuoteText);
    setNewQuoteText('');
  }

  function handleRemoveQuote(id) {
    removeMutation.mutate(id);
  }

  return (
    <div className="example-container">
      <h2>Example 5: Quote with React Query (TanStack Query)</h2>
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
          disabled={addMutation.isPending}
        />
        <button type="submit" disabled={addMutation.isPending}>
          {addMutation.isPending && !withOptimisticUpdates
            ? 'Adding...'
            : 'Add Quote'}
        </button>
        <button
          onClick={() =>
            queryClient.invalidateQueries({ queryKey: ['quotes'] })
          }
          disabled={
            (removeMutation.isPending && !withOptimisticUpdates) ||
            isLoadingQuotes
          }
        >
          {(removeMutation.isPending && !withOptimisticUpdates) ||
          isLoadingQuotes
            ? 'Refreshing...'
            : 'Refresh Quotes'}
        </button>
      </form>
      <label className="optimistic-updates-toggle">
        <input
          type="checkbox"
          checked={withOptimisticUpdates}
          onChange={(e) => setWithOptimisticUpdates(e.target.checked)}
        />
        Use optimistic updates
      </label>

      {isErrorQuotes && (
        <p className="error-message">
          Error fetching quotes: {errorQuotes?.message}
        </p>
      )}
      {addMutation.isError && (
        <p className="error-message">
          Error adding quote: {addMutation.error?.message}
        </p>
      )}
      {removeMutation.isError && (
        <p className="error-message">
          Error removing quote: {removeMutation.error?.message}
        </p>
      )}

      {isLoadingQuotes && quotes.length === 0 && <p>Loading quotes...</p>}

      {!isLoadingQuotes && !isErrorQuotes && quotes.length === 0 && (
        <p>No quotes yet. Add one or check if the backend is connected!</p>
      )}

      <ul className="quote-list">
        {quotes.map((quote) => (
          <li key={quote.id} className="quote-item">
            {quote.text} (ID: {quote.id})
            <button
              onClick={() => handleRemoveQuote(quote.id)}
              disabled={removeMutation.isPending}
              className="remove-button"
            >
              {removeMutation.isPending && removeMutation.variables === quote.id
                ? 'Removing...'
                : 'Remove'}
            </button>
          </li>
        ))}
      </ul>

      <Notes title="About This Example (React Query)">
        <p>
          This example replaces our custom <code>useQuotesApi</code> hook with{' '}
          <strong>React Query</strong> (now TanStack Query), a powerful library
          for server-state management in React applications.
        </p>
        <p>
          <strong>Key Concepts with React Query:</strong>
        </p>
        <ul>
          <li>
            <strong>
              <code>QueryClientProvider</code> & <code>QueryClient</code>:
            </strong>{' '}
            (SETUP REQUIRED in <code>main.jsx</code> or <code>App.jsx</code>)
            React Query requires a <code>QueryClient</code> instance and for
            your app (or the relevant part) to be wrapped in{' '}
            <code>QueryClientProvider</code>. This provides the context for all
            query operations.
            <br />
            <pre>
              <code>
                {`
// main.jsx or App.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

// ... wrap your app:
<QueryClientProvider client={queryClient}>
...
</QueryClientProvider>

`.trim()}
              </code>
            </pre>
          </li>
          <li>
            <strong>
              <code>useQuery</code>:
            </strong>{' '}
            Used for fetching (GET) data. It handles caching, background
            updates, stale data management, loading states, and error states
            automatically.
            <ul>
              <li>
                <code>queryKey: ['quotes']</code>: A unique key to identify this
                query. React Query uses this for caching. Changing the key will
                trigger a new fetch.
              </li>
              <li>
                <code>queryFn: fetchQuotes</code>: An async function that
                returns a promise resolving to your data.
              </li>
              <li>
                Returns an object with <code>data</code>, <code>isLoading</code>
                , <code>isError</code>, <code>error</code>, etc.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              <code>useMutation</code>:
            </strong>{' '}
            Used for creating, updating, or deleting data (POST, PUT, DELETE).
            <ul>
              <li>
                <code>mutationFn: addQuoteRequest</code>: An async function that
                performs the mutation. It receives the variables passed to{' '}
                <code>mutate()</code>.
              </li>
              <li>
                <code>onSuccess</code>: Callback after a successful mutation.
                Often used to invalidate queries (
                <code>queryClient.invalidateQueries()</code>) to refetch data,
                or to perform optimistic updates (
                <code>queryClient.setQueryData()</code>).
              </li>
              <li>
                <code>onError</code>: Callback for mutation errors.
              </li>
              <li>
                <code>addMutation.mutate(variables)</code>: Function to trigger
                the mutation.
              </li>
              <li>
                Provides <code>isPending</code>, <code>isError</code>,{' '}
                <code>error</code>, <code>data</code> (response from mutationFn)
                for the mutation state.
              </li>
            </ul>
          </li>
          <li>
            <strong>Query Invalidation:</strong>{' '}
            <code>
              queryClient.invalidateQueries({`{ queryKey: ['quotes'] }`})
            </code>{' '}
            tells React Query that the data associated with the 'quotes' key is
            stale and should be refetched.
          </li>
          <li>
            <strong>Optimistic Updates / Manual Cache Updates:</strong> With{' '}
            <code>queryClient.setQueryData()</code>, you can directly update the
            cached data after a mutation, providing a faster UI response before
            the refetch (if any) completes. This is shown in{' '}
            <code>addMutation</code>'s <code>onSuccess</code>.
          </li>
        </ul>
        <p>
          <strong>Benefits over Custom Hook / Manual Fetching:</strong>
        </p>
        <ul>
          <li>
            <strong>Caching:</strong> Sophisticated caching reduces redundant
            API calls.
          </li>
          <li>
            <strong>Automatic Refetching:</strong> Can refetch data on window
            focus, network reconnection, or intervals.
          </li>
          <li>
            <strong>Devtools:</strong> TanStack Query comes with excellent
            devtools for inspecting query states, cache, etc. (Need to install{' '}
            <code>@tanstack/react-query-devtools</code>).
          </li>
          <li>
            <strong>Reduced Boilerplate:</strong> Handles many common
            data-fetching concerns out-of-the-box, leading to less manual code
            for loading states, errors, retries etc.
          </li>
          <li>
            <strong>Server State Management:</strong> It's designed specifically
            for managing server state, which is different from client state
            (like UI state).
          </li>
        </ul>
        <p>
          While our custom hook in Example 4 was a good step for organizing
          logic, React Query provides a more robust, feature-rich, and
          battle-tested solution for interacting with APIs.
        </p>
        <p>
          <strong>
            Remember to install <code>@tanstack/react-query</code> and set up{' '}
            <code>QueryClientProvider</code>!
          </strong>
        </p>
      </Notes>
    </div>
  );
}
