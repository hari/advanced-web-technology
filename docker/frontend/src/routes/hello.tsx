import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/hello')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Hello "/hello"!</h1>
    </div>
  );
}
