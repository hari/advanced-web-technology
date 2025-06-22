import type { User } from '../../types/user';
import { ProfileHeader } from './ProfileHeader';
import { UserDetails } from './UserDetails';

export function ProfileCard({ user }: { user: User }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <ProfileHeader user={user} />
        <UserDetails user={user} />
      </div>
    </div>
  );
}
