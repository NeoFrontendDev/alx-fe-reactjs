const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="rounded-full w-24 h-24 md:w-36 md:h-36 mb-4"
        />

        {/* Username */}
        <h2 className="text-lg md:text-xl font-bold">{user.login}</h2>

        {/* Bio */}
        {user.bio && (
          <p className="text-sm md:text-base text-gray-600 mt-2">
            {user.bio}
          </p>
        )}

        {/* Additional Info */}
        <div className="mt-4 space-y-2 text-sm md:text-base text-gray-500">
          {user.location && <p>📍 {user.location}</p>}
          {user.public_repos !== undefined && (
            <p>📦 {user.public_repos} public repos</p>
          )}
          {user.followers !== undefined && (
            <p>👥 {user.followers} followers</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
