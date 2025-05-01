import React, { useState } from "react";
import { useAuth0, LogoutOptions } from "@auth0/auth0-react";
import RepositoriesList from "../components/Repositories/RepositoriesList";
import "../styles/global.css";

interface CustomLogoutOptions extends LogoutOptions {
  returnTo?: string;
}

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [username, setUsername] = useState<string>(user?.nickname || user?.name || "");
  const [refreshKey, setRefreshKey] = useState<number>(0);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading your profile...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="error-container">
        <p className="error">You are not authorized to view this page.</p>
      </div>
    );
  }

  const handleLogout = () => {
    logout({ returnTo: window.location.origin } as CustomLogoutOptions);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleRefreshRepositories = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="page-container">
      <div className="profile-header">
        <h1>Profile</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      <div className="profile-details">
        <h2>Welcome, {user?.name || user?.nickname}</h2>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Username:</strong>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="username-input"
          />
          <button onClick={handleRefreshRepositories} className="refresh-button">
            Refresh Repositories
          </button>
        </p>
      </div>
      <RepositoriesList key={refreshKey} username={username} />
    </div>
  );
};

export default ProfilePage;