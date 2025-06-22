import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import type { User } from '../../types/user';
import { ProfileCard } from '../../components/profile/ProfileCard';

export const Route = createFileRoute('/profile/$userId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = Route.useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockUser: User = {
          id: userId,
          name: `${userId}`,
          email: `${userId}@example.com`,
          address: {
            street: '123 Main Street',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
          },
          phone: '+1 (555) 123-4567',
          avatar: `https://i.pravatar.cc/150?u=${userId}`,
        };

        setUser(mockUser);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">User not found</div>
      </div>
    );
  }

  return <ProfileCard user={user} />;
}
