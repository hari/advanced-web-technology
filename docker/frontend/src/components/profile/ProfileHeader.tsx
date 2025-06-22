import type { User } from '../../types/user';

export function ProfileHeader({
  user,
}: {
  user: Pick<User, 'avatar' | 'name' | 'email'>;
}) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8">
      <div className="flex items-center space-x-6">
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-white">{user.name}</h1>
          <p className="text-blue-100">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
