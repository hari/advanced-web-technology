// This example demonstrates that React doesn't automatically
// re-render when a plain JavaScript variable is updated.

let quotes = ['The only way to do great work is to love what you do.'];
let newQuote = '';

function addQuote() {
  if (newQuote.trim() !== '') {
    quotes.push(newQuote);
    // newQuote = ""; // Clear input, but won't reflect in UI
    console.log('Quotes after adding:', quotes);
    // We would expect the UI to update here, but it won't
    // because 'quotes' is not a state variable.
  }
}

function handleInputChange(event) {
  newQuote = event.target.value;
  // Input value will change, but 'newQuote' is not tied to React's rendering.
}

function removeQuote(indexToRemove) {
  quotes = quotes.filter((_, index) => index !== indexToRemove);
  console.log('Quotes after removing:', quotes);
  // Again, UI won't update.
}

export default function Quote() {
  console.log('Rendering Quote component. Quotes:', quotes);
  return (
    <div className="example-container">
      <h2>Example 1: Simple Quote (Non-Reactive)</h2>
      <form
        className="quote-input"
        onSubmit={(e) => {
          e.preventDefault();
          addQuote();
        }}
      >
        <input
          type="text"
          defaultValue={newQuote}
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
      {quotes.length === 0 && <p>No quotes yet. Add one!</p>}

      <div className="student-notes">
        <h3>Notes for Students:</h3>
        <p>
          In this example, we are managing the list of quotes and the new quote
          input using simple JavaScript variables (
          <code>let quotes = [...]</code> and <code>let newQuote = ""</code>).
        </p>
        <p>Notice what happens when you try to add or remove quotes:</p>
        <ul>
          <li>
            <strong>Adding Quotes:</strong> When you type in the input field and
            click "Add Quote", the <code>addQuote</code> function is called.
            Inside this function, we push the new quote to the{' '}
            <code>quotes</code> array. If you check the browser's console,
            you'll see the
            <code>quotes</code> array being updated. However, the list of quotes
            displayed on the page does not change. The input field also doesn't
            clear itself even if we were to reassign `newQuote`.
          </li>
          <li>
            <strong>Removing Quotes:</strong> Similarly, when you click
            "Remove", the quote is removed from the <code>quotes</code> array
            (check the console), but the UI still shows it.
          </li>
          <li>
            <strong>Input Field:</strong> The input field itself is an
            "uncontrolled component" in this setup. Its value is managed by the
            DOM, not by React. While <code>handleInputChange</code> updates the{' '}
            <code>newQuote</code> variable, this variable isn't used to control
            the input's displayed value.
          </li>
        </ul>
        <p>
          <strong>Why isn't the UI updating?</strong>
        </p>
        <p>
          React components re-render (update what's shown on the screen) only
          when their
          <strong>state</strong> or <strong>props</strong> change. Plain
          JavaScript variables like
          <code>quotes</code> and <code>newQuote</code> are not part of React's
          state system. Modifying them directly does not trigger a re-render.
        </p>
        <p>
          This example highlights a core concept: for React to be "reactive" and
          update the display, you need to use its state management capabilities
          (like the <code>useState</code> hook), which we will see in the next
          example.
        </p>
        <p>
          Open your browser's developer console (usually by pressing F12) to see
          the
          <code>console.log</code> messages showing that the JavaScript
          variables *are* indeed changing, even though the UI isn't.
        </p>
      </div>
    </div>
  );
}
