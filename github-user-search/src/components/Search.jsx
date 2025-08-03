import { useState } from "react";
import { fetchAdvancedUsers, fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchAttempted, setSearchAttempted] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setSelectedUser(null);
    setSearchAttempted(true);

    try {
      const results = await fetchAdvancedUsers({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError("Something went wrong while fetching users.");
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = async (login) => {
    setUserLoading(true);
    setSelectedUser(null);
    try {
      const userData = await fetchUserData(login);
      setSelectedUser(userData);
    } catch (err) {
      setError("Could not fetch user details.");
    } finally {
      setUserLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold">Advanced GitHub User Search</h2>

        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            placeholder="octocat"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            placeholder="South Africa"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            placeholder="10"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between gap-4 p-4 border rounded-lg shadow-sm bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-semibold">{user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleViewDetails(user.login)}
                className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {searchAttempted && !loading && !error && users.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          Looks like we can't find the user.
        </p>
      )}

      {userLoading && <p className="mt-4 text-center">Loading user details...</p>}

      {selectedUser && (
        <div className="mt-6 bg-white p-4 rounded-xl shadow-md border">
          <h3 className="text-lg font-semibold mb-2">User Details: {selectedUser.login}</h3>
          <p><strong>Name:</strong> {selectedUser.name || "N/A"}</p>
          <p><strong>Bio:</strong> {selectedUser.bio || "No bio available."}</p>
          <p><strong>Location:</strong> {selectedUser.location || "Unknown"}</p>
          <p><strong>Public Repositories:</strong> {selectedUser.public_repos}</p>
          <p><strong>Followers:</strong> {selectedUser.followers}</p>
          <p><strong>Following:</strong> {selectedUser.following}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
