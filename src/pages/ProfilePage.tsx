import React from "react";
import { useAuth0, LogoutOptions } from "@auth0/auth0-react";
import RepositoriesList from "../components/Repositories/RepositoriesList";
import "../styles/global.css";


interface CustomLogoutOptions extends LogoutOptions {
  returnTo?: string;
}

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

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

  return (
    <div className="page-container">
      <h1 className="header">Profile Page</h1>
      <div className="profile-details">
        <h2>Welcome, {user?.name || user?.nickname}</h2>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Username:</strong> {user?.nickname}
        </p>
      </div>
      <RepositoriesList />
      <button
        onClick={handleLogout}
        className="button button-secondary logout-button"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
