import { useState } from 'react';
import Notes from './Notes';

export default function QuoteState() {
  const [quotes, setQuotes] = useState(['State makes React reactive!']);
  const [newQuote, setNewQuote] = useState('');

  function handleInputChange(event) {
    setNewQuote(event.target.value);
  }

  function addQuote() {
    if (newQuote.trim() !== '') {
      setQuotes([...quotes, newQuote]);
      setNewQuote(''); // Clear input field
    }
  }

  function removeQuote(indexToRemove) {
    setQuotes(quotes.filter((_, index) => index !== indexToRemove));
  }

  console.log('Rendering QuoteState component. Quotes:', quotes);

  return (
    <div className="example-container">
      <h2>Example 2: Quote with State (Reactive)</h2>
      <form
        className="quote-input"
        onSubmit={(event) => {
          event.preventDefault();
          addQuote();
        }}
      >
        <input
          type="text"
          value={newQuote} // Controlled component
          onChange={handleInputChange}
          placeholder="Enter a new quote"
        />
        <button type="submit">Add Quote</button>
      </form>
      <ul className="quote-list">
        {quotes.map((quote, index) => (
          <li key={index} className="quote-item">
            {quote}
            <button
              onClick={() => removeQuote(index)}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {quotes.length === 0 && <p>No quotes yet. Add one using state!</p>}

      <Notes title="About This Example (useState)">
        <p>
          This example introduces the <code>useState</code> hook, a fundamental
          part of React for managing component state.
        </p>
        <p>
          <strong>Comparison with Example 1:</strong>
        </p>
        <ul>
          <li>
            <strong>State Variables:</strong> Instead of plain JavaScript
            variables, we now use <code>useState</code> to declare{' '}
            <code>quotes</code> and <code>newQuote</code>:
            <br />
            <code>const [quotes, setQuotes] = useState([...]);</code>
            <br />
            <code>const [newQuote, setNewQuote] = useState("");</code>
            <br />
            <code>useState</code> returns an array with two elements: the
            current state value and a function to update that value (e.g.,{' '}
            <code>setQuotes</code>).
          </li>
          <li>
            <strong>Updating State:</strong> To modify <code>quotes</code> or{' '}
            <code>newQuote</code>, we now call their respective setter functions
            (<code>setQuotes(...)</code> or <code>setNewQuote(...)</code>). When
            these functions are called, React knows that the state has changed
            and <strong>automatically re-renders the component</strong> and any
            affected child components.
          </li>
          <li>
            <strong>Reactivity:</strong> Try adding and removing quotes. You'll
            see that the UI updates immediately. This is because changing state
            via <code>setQuotes</code> triggers a re-render, and React updates
            the DOM to reflect the new state.
          </li>
          <li>
            <strong>Controlled Input:</strong> The input field is now a
            "controlled component". Its <code>value</code> is explicitly set to
            the <code>newQuote</code> state variable, and its{' '}
            <code>onChange</code> handler updates <code>newQuote</code> via{' '}
            <code>setNewQuote</code>. This creates a two-way binding: the state
            drives the input's value, and user input updates the state. This is
            why the input field now clears after adding a quote.
          </li>
        </ul>
        <p>
          <strong>Key Takeaway:</strong>
        </p>
        <p>
          The <code>useState</code> hook is how you give your components
          "memory" and make them dynamic. When a component's state changes,
          React efficiently updates the parts of the page that need to change,
          without you having to manually manipulate the DOM.
        </p>
        <p>
          This is the foundation of building interactive user interfaces in
          React.
        </p>
      </Notes>
    </div>
  );
}
