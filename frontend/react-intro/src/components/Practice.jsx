export default function Practice() {
  return (
    <div className="example-container" style={{ lineHeight: '1.5' }}>
      <h2>Refactoring Practice: Quotes App</h2>
      <div>
        <p>
          In this practice session, you'll refactor one of the existing quote
          management components (e.g., <code>QuoteRest.jsx</code> or even
          better, start from <code>QuoteCustomHook.jsx</code> if you want to
          build upon it) into a more modular structure. This will help reinforce
          your understanding of custom hooks, component composition, and
          environment variables.
        </p>
        <p>
          <strong>Goal:</strong> Separate concerns by creating dedicated files
          for API calls, the quote submission form, the list of quotes, and
          environment configuration.
        </p>

        <h4>Step 1: Create `api.js` (and a Custom Hook)</h4>
        <ul>
          <li>
            Create a new file named <code>api.js</code> (e.g., in a{' '}
            <code>src/api</code> folder or <code>src/hooks</code> if it
            primarily exports a hook).
          </li>
          <li>
            <strong>API URL:</strong> Instead of hardcoding{' '}
            <code>http://localhost:4444</code>, move this to an environment
            variable.
          </li>
          <li>
            Move all direct <code>fetch</code> calls (for fetching, adding, and
            deleting quotes) into this file.
          </li>
          <li>
            You can export these as individual functions (e.g.,{' '}
            <code>fetchQuotesApi</code>, <code>addQuoteApi</code>,{' '}
            <code>removeQuoteApi</code>).
          </li>
          <li>
            <strong>Custom Hook (Recommended):</strong> Create or refine a
            custom hook (e.g., <code>useQuotesApi</code>) within this file or
            import functions from <code>api.js</code> into a new hook. This hook
            should manage:
            <ul>
              <li>
                The quotes data (<code>quotes</code> array).
              </li>
              <li>
                Loading (<code>isLoading</code>) and error (<code>error</code>)
                states related to API calls.
              </li>
              <li>
                Functions to fetch, add, and remove quotes, which internally use
                your API functions.
              </li>
              <li>
                It should return{' '}
                {`{ quotes, isLoading, error, addQuote, removeQuote, fetchQuotes }`}
                .
              </li>
            </ul>
          </li>
        </ul>

        <h4>Step 2: Create `.env` for Environment Variables</h4>
        <ul>
          <li>
            Create a <code>.env</code> file in the root of your{' '}
            <code>frontend/react-intro</code> project (if it doesn't exist).
          </li>
          <li>
            Add your API base URL:{' '}
            <code>VITE_API_URL=http://localhost:4444</code> (if using Vite,
            prefix with <code>VITE_</code>).
          </li>
          <li>
            Remember to add <code>.env</code> to your <code>.gitignore</code>{' '}
            file if it contains sensitive information (though for a local URL,
            it's less critical).
          </li>
          <li>
            Access this variable in your <code>api.js</code> or custom hook
            using <code>import.meta.env.VITE_API_URL</code> (for Vite).
          </li>
        </ul>

        <h4>Step 3: Create `QuoteForm.jsx`</h4>
        <ul>
          <li>
            Create a new component file <code>QuoteForm.jsx</code> in your{' '}
            <code>src/components</code> folder.
          </li>
          <li>
            This component will be responsible for rendering the input field and
            the "Add Quote" button.
          </li>
          <li>
            It should accept props for:
            <ul>
              <li>
                The current new quote text (<code>newQuote</code> or{' '}
                <code>value</code>).
              </li>
              <li>
                A handler for input changes (<code>onInputChange</code> or{' '}
                <code>onChange</code>).
              </li>
              <li>
                A handler for form submission (<code>onSubmit</code> or{' '}
                <code>onAddQuote</code>).
              </li>
              <li>
                A prop to indicate if it should be disabled (e.g.,{' '}
                <code>isLoading</code>).
              </li>
            </ul>
          </li>
          <li>This component should be purely presentational if possible.</li>
        </ul>

        <h4>Step 4: Create `QuoteList.jsx`</h4>
        <ul>
          <li>
            Create a new component file <code>QuoteList.jsx</code> in your{' '}
            <code>src/components</code> folder.
          </li>
          <li>
            This component will be responsible for rendering the list of quotes.
          </li>
          <li>
            It should accept props for:
            <ul>
              <li>
                The array of <code>quotes</code> to display.
              </li>
              <li>
                A handler for removing a quote (<code>onRemoveQuote</code>),
                which takes the quote ID.
              </li>
              <li>
                A prop to indicate if actions should be disabled (e.g.,{' '}
                <code>isLoading</code>).
              </li>
            </ul>
          </li>
          <li>Each quote item in the list should have a "Remove" button.</li>
        </ul>

        <h4>Step 5: Refactor Your Main Quote Component</h4>
        <ul>
          <li>
            Choose the component you are refactoring (e.g.,{' '}
            <code>QuoteRest.jsx</code>, or create a new{' '}
            <code>RefactoredQuote.jsx</code>).
          </li>
          <li>
            Use your custom hook (<code>useQuotesApi</code>) to get the data and
            action handlers.
          </li>
          <li>
            Render the <code>QuoteForm</code> component, passing the necessary
            props (state and handlers for new quote input and submission).
          </li>
          <li>
            Render the <code>QuoteList</code> component, passing the quotes
            array and the remove handler.
          </li>
          <li>
            Manage any specific UI state that doesn't belong in the hook (like
            the <code>newQuoteText</code> input state if you prefer to keep it
            in the parent).
          </li>
          <li>Display loading and error messages from your custom hook.</li>
        </ul>

        <p>
          <strong>Bonus:</strong>
        </p>
        <ul>
          <li>
            Can you make <code>QuoteForm</code> and <code>QuoteList</code> even
            more generic or reusable?
          </li>
          <li>
            How would you handle optimistic updates within your custom hook for
            add/remove operations?
          </li>
        </ul>
        <p>
          This refactoring will make your codebase cleaner, more maintainable,
          and easier to test. Good luck!
        </p>
      </div>
    </div>
  );
}
