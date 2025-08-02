import axios from "axios";

const SEARCH_URL = "https://api.github.com/search/users";

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += ${username} in:login;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(${SEARCH_URL}?q=${encodeURIComponent(query)}&per_page=20);
  return response.data.items;
};
