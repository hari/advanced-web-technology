import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/profile/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>This is a profile page</div>;
}
