import { useState, useEffect, useCallback } from 'react';

const API_URL = 'http://localhost:4444/quotes';

export function useQuotesApi() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
  }, []); // Empty dependency array, fetchQuotes itself is stable

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]); // Re-run if fetchQuotes changes (it won't due to useCallback)

  const addQuote = useCallback(async (text) => {
    if (text.trim() === '') return null;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }
      const addedQuote = await response.json();
      setQuotes((prevQuotes) => [addedQuote, ...prevQuotes]);
      return addedQuote;
    } catch (e) {
      console.error('Failed to add quote:', e);
      setError(`Failed to add quote: ${e.message}`);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []); // No dependencies that change often

  const removeQuote = useCallback(async (id) => {
    // setError(null); // Can be set here or handled by the component if needed for specific delete error
    // No setIsLoading for remove usually, or it's very brief.
    // For simplicity in the hook, we might not manage a separate loading state for remove.
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok && response.status !== 204) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== id));
      return true; // Indicate success
    } catch (e) {
      console.error('Failed to remove quote:', e);
      setError('Failed to remove quote. Check console for details.');
      // It might be good to also setError specifically for the remove operation
      // if the component needs to display it differently.
      return false; // Indicate failure
    }
  }, []); // No dependencies that change often

  return { quotes, isLoading, error, addQuote, removeQuote, fetchQuotes };
}
