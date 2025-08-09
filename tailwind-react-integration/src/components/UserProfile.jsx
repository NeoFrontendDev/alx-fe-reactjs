const UserProfile = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto">
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto"
      />
      <h2 className="text-center font-bold sm:text-lg md:text-xl mt-4">
        {user.name || user.login}
      </h2>
      <p className="text-center sm:text-sm md:text-base text-gray-600">
        {user.bio || "No bio available"}
      </p>
    </div>
  );
};

export default UserProfile;
