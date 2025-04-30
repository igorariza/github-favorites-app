import React, { useEffect, useState } from 'react';
import { fetchUserRepositories } from '../../services/api';

const RepositoriesList: React.FC = () => {
    const [repositories, setRepositories] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepositories = async () => {
            const username = 'example-username';
            try {
                const repos = await fetchUserRepositories(username);
                setRepositories(repos);
            } catch (err) {
                setError('Failed to fetch repositories');
            } finally {
                setLoading(false);
            }
        };

        fetchRepositories();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Your GitHub Repositories</h2>
            <ul>
                {repositories.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RepositoriesList;