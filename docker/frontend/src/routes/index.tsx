import { createFileRoute } from '@tanstack/react-router';
import '../App.css';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div>
      <h1 className="text-5xl font-bold">Hello there</h1>
    </div>
  );
}
