import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const fetchUserRepositories = async (username: string) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error('Error fetching repositories: ' + error.message);
        } else if (error instanceof Error) {
            throw new Error('Error fetching repositories: ' + error.message);
        } else {
            throw new Error('An unknown error occurred while fetching repositories.');
        }
    }
};