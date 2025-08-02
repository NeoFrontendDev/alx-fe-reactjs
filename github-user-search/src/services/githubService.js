import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export const fetchUserData = async (username) => {
  const rescponse = await
    axois.get('${BASE_URL}/${username}
    );
  return response.data;
};
