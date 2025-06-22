import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'; // Assuming App.css is used for App component styles

// Import all the example components
import Quote from './components/Quote.jsx';
import QuoteState from './components/QuoteState.jsx';
import QuoteRest from './components/QuoteRest.jsx';
import QuoteCustomHook from './components/QuoteCustomHook.jsx';
import QuoteReactQuery from './components/QuoteReactQuery.jsx';
import QuoteStream from './components/QuoteStream.jsx';
import QuoteSocket from './components/QuoteSocket.jsx';
import Practice from './components/Practice.jsx';
import NotesApp from './NotesApp.jsx';

const queryClient = new QueryClient();

const examples = {
  example1: { name: '1: JS Vars', component: Quote },
  example2: { name: '2: useState', component: QuoteState },
  example3: { name: '3: fetch API', component: QuoteRest },
  example4: { name: '4: Custom Hook', component: QuoteCustomHook },
  example5: { name: '5: React Query', component: QuoteReactQuery },
  example6: { name: '6: SSE Stream', component: QuoteStream },
  example7: { name: '7: WebSockets', component: QuoteSocket },
  practice: { name: 'Practice', component: Practice },
};

function App() {
  const [activeTab, setActiveTab] = useState(
    new URLSearchParams(window.location.search).get('tab') || 'example1'
  );

  const ActiveComponent = examples[activeTab].component;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <h1>React Quote Mini-Apps</h1>
        <nav className="tab-nav">
          {Object.entries(examples).map(([key, { name }]) => (
            <a
              key={key}
              className={`tab-button ${activeTab === key ? 'active' : ''}`}
              href={`?tab=${key}`}
              onClick={(event) => {
                event.preventDefault();
                setActiveTab(key);
                window.history.pushState({}, '', `?tab=${key}`);
              }}
            >
              {name}
            </a>
          ))}
        </nav>
        <main className="tab-content">
          <ActiveComponent />
        </main>
        <footer>
          <p>
            Switch between tabs to see different examples of React concepts.
          </p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
