import React, { useEffect, useState } from "react";
import { fetchUserRepositories } from "../../services/api";

interface RepositoriesListProps {
  username: string;
}

const RepositoriesList: React.FC<RepositoriesListProps> = ({ username }) => {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      if (!username) {
        setError("Username is required");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const repos = await fetchUserRepositories(username);
        const sortedRepos = repos.sort(
          (a: any, b: any) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        setRepositories(sortedRepos);
      } catch (err) {
        setError("Failed to fetch repositories");
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading repositories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  }

  if (repositories.length === 0) {
    return (
      <div className="empty-container">
        <p>No repositories found.</p>
      </div>
    );
  }

  return (
    <div className="repositories-container">
      <h2>Your GitHub Repositories</h2>
      <div className="repositories-grid">
        {repositories.map((repo) => (
          <div key={repo.id} className="repository-card">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description available"}</p>
              <div className="repository-info">
                <span>⭐ {repo.stargazers_count} Stars</span>
                <span>🍴 {repo.forks_count} Forks</span>
                <span>🛠 {repo.language || "Unknown"}</span>
                <span>
                  📅 Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoriesList;