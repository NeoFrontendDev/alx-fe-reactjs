import axios from 'axios';

const github = axios.create({
    baseURL:
    import.meta.env.VITE_GITHUB_API_URL,
    headers: {
        Authorization:
        import.meta.env.VITE_GITHUB_API_KEY
            ? 'token $ {import.meta.env.VITE_GITHUB_API_KEY}' : '',
    }
});

export const searchUsers = async (username) => {
    const response = await
    github.get('/search/user?q=$ {username}');
    return response.data;
}