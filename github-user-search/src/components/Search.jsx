import { useState } from "react";
import { fetchUserData } from "../services/githubServices";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSumbit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="search-container">
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Enter GitHub username" value={username} onChange={(e) =>
      setUsername(e.target.value)} />
      <button type="submit">Search</button>
    </form>
      {loading && <p>Loading...</p>
        {error && <p>{error}</p>
          {user && (
            <div className="user-card">
            <img src={user.avatar_url} alt={'${User.login}'s avatar'} width={100} />
            <h3>{user.name || user.login}<h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferer">
            View Profile
            </a>
            </div>
          )}
    </div>
  );
};

export default Search;
